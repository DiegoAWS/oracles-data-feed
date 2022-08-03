import React, { useLayoutEffect, useMemo } from 'react'
import './AmChartZoom.scss'
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import sourceData from '../../data/LINK_1m_rewards.json'



function AmChartZoom({ network = "Harmony Mainnet" }) {
    const updatedData = useMemo(() => sourceData
        .filter(item => item.network === network)
        .map(item => ({
            date: new Date(item.time).getTime(),
            value: item.value
        })), [network])

    useLayoutEffect(() => {

        let root = am5.Root.new(network);

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panY: "none",
                wheelY: "zoomX",
                layout: root.verticalLayout
            })
        );

        // Create Y-axis
        var yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, { })
            })
        );

        // Create X-Axis
        var xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                groupData: true,
                baseInterval: { timeUnit: "day", count: 1 },
                renderer: am5xy.AxisRendererX.new(root, {
                    minGridDistance: 30
                })
            })
        );

        xAxis.get("dateFormats")["day"] = "MM/dd";
        xAxis.get("periodChangeDateFormats")["day"] = "MMMM";

        // Generate random data
        // var date = new Date(2000);
        // date.setHours(0, 0, 0, 0);
        // var value = 100;

        // function generateData() {
        //     value = Math.round((Math.random() * 10 - 5) + value);
        //     am5.time.add(date, "day", 1);
        //     return {
        //         date: date.getTime(),
        //         value: value
        //     };
        // }

        // function generateDatas(count) {
        //     var data = [];
        //     for (var i = 0; i < count; ++i) {
        //         data.push(generateData());
        //     }
        //     return data;
        // }
        var data = updatedData // generateDatas(50000);

        // Create series
        function createSeries(name, field) {
            var series = chart.series.push(
                am5xy.LineSeries.new(root, {
                    name: name,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: field,
                    valueXField: "date",
                    tooltip: am5.Tooltip.new(root, {})
                })
            );

            series.strokes.template.set("strokeWidth", 2);

            series.get("tooltip").label.set("text", "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}")
            series.data.setAll(data);
            console.log({ data })
            // Pre-zoom X axis
            series.events.once("datavalidated", function (ev, target) {
                xAxis.zoomToDates(new Date(2022, 6, 1), new Date(2022, 7, 1))
            })
        }

        createSeries("ETH", "value");

        // Add cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {
            behavior: "zoomXY",
            xAxis: xAxis
        }));

        xAxis.set("tooltip", am5.Tooltip.new(root, {
            themeTags: ["axis"]
        }));

        yAxis.set("tooltip", am5.Tooltip.new(root, {
            themeTags: ["axis"]
        }));

        chart.set("scrollbarX", am5.Scrollbar.new(root, {
            orientation: "horizontal"
        }));

        return () => {
            root.dispose();
        };
    }, [network, updatedData]);

    return (

        <div id={network} className="amChartZoomContainer" style={{ width: "100%", height: "100%" }}></div>

    );

}

export default AmChartZoom