import React from 'react'
import './rewards.css'
import RewardCard from '@/components/rewards/RewardCard'
import ethDaiIcon from '@/assets/images/coins-pair-eth-dai.svg'
import ethUsdcIcon from '@/assets/images/coins-pair-eth-usdc.svg'
import ethWbtcIcon from '@/assets/images/coins-pair-eth-wbtc.svg'
import ethFuseIcon from '@/assets/images/coins-pair-eth-fuse.svg'
import ethIcon from '@/assets/images/eth.svg'
import fuseIcon from '@/assets/images/fuse-token.svg'

const ethRewardCards = [
    {
        title:"ETH / FUSE",
        icon:ethFuseIcon,
        expDate:"16 November 2020",
        totalLockedValue:"9,999,999.99 FUSE",
        accuredRewards:"9,999,999.99 FUSE/BLOCK",
        apy:"3.89%",
        isHot:false
    },
    {
        title:"ETH / FUSE",
        icon:ethFuseIcon,
        expDate:"16 November 2020",
        totalLockedValue:"9,999,999.99 FUSE",
        accuredRewards:"9,999,999.99 FUSE/BLOCK",
        apy:"3.89%",
        isHot:true
    }
];
const fuseRewardCards = [
    {
        title:"ETH / USDC",
        icon:ethUsdcIcon,
        expDate:"16 November 2020",
        totalLockedValue:"9,999,999.99 FUSE",
        accuredRewards:"9,999,999.99 FUSE/BLOCK",
        apy:"3.89%",
        isHot:false
    },
    {
        title:"ETH / DAI",
        icon:ethDaiIcon,
        expDate:"16 November 2020",
        totalLockedValue:"9,999,999.99 FUSE",
        accuredRewards:"9,999,999.99 FUSE/BLOCK",
        apy:"3.89%",
        isHot:false
    },
    {
        title:"ETH / WBTC",
        icon:ethWbtcIcon,
        expDate:"16 November 2020",
        totalLockedValue:"9,999,999.99 FUSE",
        accuredRewards:"9,999,999.99 FUSE/BLOCK",
        apy:"3.89%",
        isHot:false
    }
];
export default  ()=> {

    return (
        <div className="rewards-page">
            <div className="rewards-headline">
                <h1>Rewards Headline</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ut venenatis lacus nec mollis augue parturient justo. Tincidunt a, eu at sapien. Urna leo nascetur integer ultrices euismod eros. Tristique aliquam sed tristique tellus. Enim pellentesque sed tristique nulla diam, elementum justo, leo. </p>
            </div>
            <div className="rewards-section">
                <div className="rewards-section-title">
                    <img id="rewards-section-icon" src={ethIcon}></img>
                    <h3 id="rewards-section-label">Rewards on Ethereum mainnet</h3>
                </div>
                <div className="cards-container">
                {
                    ethRewardCards.map(card=>(
                        <RewardCard
                        title = {card.title}
                        id={card.id}
                        key={card.id}
                        icon = {card.icon}
                        expDate = {card.expDate}
                        totalLockedValue = {card.totalLockedValue}
                        accuredRewards = {card.accuredRewards}
                        apy = {card.apy}
                        isHot = {card.isHot}
                        />
                        ))
                    }
                </div>
            </div>
            <div className="rewards-section">
                <div className="rewards-section-title">
                    <img id="rewards-section-icon" src={fuseIcon}></img>
                    <h3 id="rewards-section-label">Rewards on Fuse blockchain</h3>
                </div>
                <div className="cards-container">
                {
                    fuseRewardCards.map(card=>(
                        <RewardCard
                        title = {card.title}
                        id={card.id}
                        key={card.id}
                        icon = {card.icon}
                        expDate = {card.expDate}
                        totalLockedValue = {card.totalLockedValue}
                        accuredRewards = {card.accuredRewards}
                        apy = {card.apy}
                        isHot = {card.isHot}
                        />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

