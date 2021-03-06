import { gql } from 'apollo-boost';

const GET_TABLE = gql`
  query {
    formDatas {
      id
      PoNumber
      FileName
      RewardType
      IssueDate
      WDRDate
      WonDollarRatio
      OrderNum_Mver
      OrderNum_Sver
      OrderNum_SAver
      OrderNum_MPack

      SellPrice_Mver
      SellPrice_Sver
      SellPrice_SAver
      SellPrice_MPack

      WonDollarRatio

      PurchaseRatio
      ExecPurchaseRatio
      TechRatio
      RewardRatio

      KEPCORatio
      MokpoRatio
      KSMRatio
      KDSRatio
      JSSRatio
      KBSRatio

      TotalSellPrice_Dlr
      TotalSellPrice_Won
      TotalBuyPrice_Dlr
      TotalBuyPrice_Won
      TotalNum
      TotalTechFare
      Difference_Dlr
      Difference_Won
    }
  }
`;

// id
//         SellPrice_Mver
//         SellPrice_Sver
//         SellPrice_SAver
//         SellPrice_MPack
//         OrderNum_Mver
//         OrderNum_Sver
//         OrderNum_SAver
//         OrderNum_MPack
//         WonDollarRatio
//         PurchaseRatio
//         TechRatio
//         KEPCORatio
//         MokpoRatio
//         RewardRatio
//         CreatedDate
//         IssueDate
//         PoNumber
//         WDRDate

export default GET_TABLE;
