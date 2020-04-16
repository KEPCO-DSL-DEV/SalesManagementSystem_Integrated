import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SUBMIT_FORM_QUERY from "../../services/submit_form";
import GET_TABLE from "../../services/get_table";
import { Mutation } from "@apollo/react-components";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const date = new Date();
const currentDate =
  String(date.getFullYear()) +
  "-" +
  String(date.getMonth()) +
  "-" +
  String(date.getDate());
//const year = String(date.getFullYear());

export default function SubmitButton2(props) {
  const classes = useStyles();

  const {
    IssueDate,
    PoNumber,

    SellPrice_Mver,
    SellPrice_Sver,
    SellPrice_SAver,
    SellPrice_MPack,

    OrderNum_Mver,
    OrderNum_Sver,
    OrderNum_SAver,
    OrderNum_MPack,

    WDRDate,
    WonDollarRatio,

    PurchaseRatio,
    TechRatio,
    KEPCORatio,
    MokpoRatio,
    RewardRatio
  } = props.inputStates;

  return (
    ///addFromData: mutation 함수처럼 호출 가능하게(서버측 이름과 맞출필요 없음),
    /// data : mutation return값

    <Mutation
      mutation={SUBMIT_FORM_QUERY}
      refetchQueries={[{ query: GET_TABLE }]}
    >
      {(addFormData, { data }) => (
        <Button
          onClick={() => {
            addFormData({
              variables: {
                SellPrice_Mver: parseFloat(SellPrice_Mver),
                SellPrice_Sver: parseFloat(SellPrice_Sver),
                SellPrice_SAver: parseFloat(SellPrice_SAver),
                SellPrice_MPack: parseFloat(SellPrice_MPack),
                OrderNum_Mver: parseFloat(OrderNum_Mver),
                OrderNum_Sver: parseFloat(OrderNum_Sver),
                OrderNum_SAver: parseFloat(OrderNum_SAver),
                OrderNum_MPack: parseFloat(OrderNum_MPack),
                WonDollarRatio: parseFloat(WonDollarRatio),
                PurchaseRatio: parseFloat(PurchaseRatio),
                TechRatio: parseFloat(TechRatio),
                KEPCORatio: parseFloat(KEPCORatio),
                MokpoRatio: parseFloat(MokpoRatio),
                RewardRatio: parseFloat(RewardRatio),
                CreatedDate: currentDate,
                IssueDate: IssueDate,
                PoNumber: PoNumber,
                WDRDate: WDRDate
              }
            });
            console.log(typeof props.inputStates.OrderNum_MPack);
            props.resetStates();

            //console.log(data);
          }}
          //onClick={this.props.onSubmithandler}
          variant="outlined"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Submit
        </Button>
      )}
    </Mutation>
  );
}