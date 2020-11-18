import React from 'react'
import './rewards.css'
import RewardCard from '@/components/rewards/RewardCard'
import ethDaiIcon from '@/assets/images/coins-pair-eth-dai.svg'
import ethUsdcIcon from '@/assets/images/coins-pair-eth-usdc.svg'
import ethWbtcIcon from '@/assets/images/coins-pair-eth-wbtc.svg'
import ethFuseIcon from '@/assets/images/coins-pair-eth-fuse.svg'
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
export default  ()=> {

    return (
        <div className="rewards-page">
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
    )
}

