import { useMemo } from 'react';
import RateChart from '../../components/RateChart/RateChart';
import TitleRateSection from '../../components/TitleRateSection/TitleRateSection';
import ohlc from '../../data/ohlc.json'

import './RatePage.scss'

function RatePage() {

    const data = useMemo(() => ohlc.map(item => ({
        date: new Date(item[0] * 1000),
        open: item[1],
        high: item[2],
        low: item[3],
        close: item[4],
        volume: item[5],
    })), [])

    return (
        <div className='ratePageWrapper'>
            <TitleRateSection />
            <br />
            <br />
            <div className='chartWraper'>
                <RateChart data={data} width={1000} />
            </div>




        </div>
    )
}

export default RatePage

