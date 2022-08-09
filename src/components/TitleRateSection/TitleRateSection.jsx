import { Avatar, AvatarGroup } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import { getCurrencyLogoUrl } from '../../services/getCurrencyLogo';
import './TitleRateSection.scss';

function TitleRateSection() {

    const { base, quote } = useParams();

    return <div className='titleRateSectionWrapper'>
        <div className='leftSection'>
            <div className="currencyLogos">
                <AvatarGroup>
                    <Avatar
                        alt={base}
                        src={getCurrencyLogoUrl(base)}
                        sx={{ width: 56, height: 56 }} />
                    <Avatar
                        alt={quote}
                        src={getCurrencyLogoUrl(quote)}
                        sx={{ width: 56, height: 56 }} />
                </AvatarGroup>
            </div>
            <div className="titlePair">
                <div>Pair</div>
                <div className='pairText'>{base} / {quote}</div>
            </div>
        </div>
        <div className="rightSection">
            <div className="infoBox">
                <div className="infoBoxTitle">Latest Answer</div>
                <div className="infoBoxValue">0.06224928 ETH</div>
            </div>
            <div className="infoBox">
                <div className="infoBoxTitle">24h Change</div>
                <div className="infoBoxValue">0.00 %</div>
            </div>
            <div className="infoBox">
                <div className="infoBoxTitle">24h Rewards</div>
                <div className="infoBoxValue">14.64 LINK</div>
            </div>
        </div>

    </div>;
}


export default TitleRateSection