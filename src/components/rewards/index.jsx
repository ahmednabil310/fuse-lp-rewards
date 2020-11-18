import React from 'react'
import RewardCard from '@/components/rewards/RewardCard'
import ethDaiIcon from '@/assets/images/coins-pair-eth-dai.svg'
import ethUsdcIcon from '@/assets/images/coins-pair-eth-usdc.svg'
import ethWbtcIcon from '@/assets/images/coins-pair-eth-wbtc.svg'

export default  ()=> {
    return (
        <div>
            <h1>Rewards</h1>
            <RewardCard/>
        </div>
    )
}

