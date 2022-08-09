import React from 'react'
import GenericChart from '../../components/GenericChart/GenericChart'
import './Overview.scss'

function Overview() {
  return (
    <div className='overviewWrapper'>
      <div className='titleSection'>
        <h1>Overview Market</h1>
        <div>Your window into the activity, economics, usage, and growth of the Chainlink Network.</div>
      </div>

      <div className="chartSections">
        <div className="chartSection">
          <GenericChart key={1} title="Feed Updates" subTitle="82.5M" type="explorer" />
        </div>
        <div className="chartSection">
          <GenericChart key={2} title="VRF Request" subTitle="121.81KM" type="explorer" />
        </div>
        <div className="chartSection">
          <GenericChart key={3} title="Direct Request" subTitle="117.11K" type="explorer" />
        </div>
        <div className="chartSection">
          <GenericChart key={4} title="Keepers" subTitle="5,381" type="explorer" />
        </div>
      </div>
      <div className="chartSections">
        <div className="chartSection">
        <GenericChart key={5} title="LINK Rewards" subTitle="168.33K LINK" />
        </div>
        <div className="chartSection">
        <GenericChart key={6} title="Gas Spent" subTitle="$340.46K" />
        </div>
      </div>
      <div className="chartSections">
        <div className="chartSection">
        <GenericChart key={8} title="Active Nodes by Network" subTitle="5,381 Nodes" type="explorer" />
        </div>
        <div className="chartSection">
        <GenericChart key={9} title="Active Feeds by Network" subTitle="5,381 Feeds" type="explorer" />
        </div>
      </div>
      <div className="chartSections">
        <div className="chartSection">
        <GenericChart key={10} title="Active Feeds by Network" subTitle="5,381 Feeds" type="pie" />
        </div>
        <div className="chartSection">
        <GenericChart key={11} title="Active Feeds by Network" subTitle="5,381 Feeds" type="pie" />
        </div>
      </div>
    </div>
  )
}

export default Overview