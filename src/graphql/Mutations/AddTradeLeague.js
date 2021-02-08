import { gql, useMutation } from '@apollo/client';

const addtradeleague = gql`
  mutation AddTradeLeague($from: _TradeInput!, $to: _LeagueInput!) {
    AddTradeLeague(from: $from, to: $to) { 
        from {
            id
        }
        to {
            id
        }
    }
  }
`;

export default addtradeleague