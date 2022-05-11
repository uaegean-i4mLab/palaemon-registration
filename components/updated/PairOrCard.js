import QrPrompt from "./QrPrompt";
import SSE from "../Sse.js";
import Typography from "@mui/material/Typography";

const PairOrCard = (props) => {
  let sseEndpoint = props.baseUrl
    ? `${props.endpoint}/${props.baseUrl}`
    : props.endpoint;
  
    let vcSentToUser = (
      <div style={{marginTop:"3rem"}}>
      <Typography variant="body1" sx={{ fontWeight: 300 }}>
        Issuance completed
      </Typography>
      <Typography variant="h5" sx={{ mt: 1, mb: 3, fontWeight: 300 }}>
        Your "Palaemon Service Card" Credential has been issued succesfully
      </Typography>
      <img src="/complete.svg" width="200px" alt="credentials" />
      <Typography variant="body1" sx={{ my: 3, fontWeight: 300 }}>
        You should be able to review your credential on your Jolocom
        Wallet
        <br />
      </Typography>
    </div>
    );
  
  if (props.vcSent) {
    return vcSentToUser;
  }
  

  if (props.qrData && !props.DID) {
    return (
      <div>
        <QrPrompt qrData={props.qrData} baseUrl={props.baseUrl} />
        <SSE
          uuid={props.uuid}
          endpoint={sseEndpoint}
          serverSessionId={props.serverSessionId}
          sealSession={props.sealSession}
          onConnected={props.onConnected}
        />
      </div>
    );
  } else {
    if (props.credQROffer) {
      return (
        <div>
          <QrPrompt
            qrData={props.credQROffer}
            baseUrl={props.baseUrl}
            isVCOffer={true}
          />
          <SSE
            uuid={props.uuid}
            endpoint={sseEndpoint}
            serverSessionId={props.serverSessionId}
            sealSession={props.sealSession}
            onConnected={props.onConnected}
          />
        </div>
      );
    } else {
      if (props.DID) {
        return props.card;
      } else {
        return <div>Generating Wallet Pairing Request...</div>;
      }
    }
  }
};

export default PairOrCard;
