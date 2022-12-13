import ExchangeInfo from './models/exchangeInfo';

function getToday(){
    let today = new Date();

    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);
    return year + '-' + month  + '-' + day;
}

export const resolvers = {
    Query: {
        async getExchangeRate(root, { src, tgt }){
            return await ExchangeInfo.findOne({
                src:src,
                tgt:tgt
            });
        }
    },

    Mutation: {
        async postExchangeRate(root, { info }){
            if(info.src==info.tgt) info.rate = 1; // 소스와 대상이 같으면 환율 1
            if(info.date===undefined) info.date=getToday(); // 값이 없으면 최신일자로

            let exchangeInfoResult = await ExchangeInfo.findOneAndUpdate(
                {src:info.src, tgt:info.tgt, date:info.date},
                info,
                {new:true}
            );
            
            if(exchangeInfoResult===null) { // 기준일, 값이 없으면 최신일자로 등록
                return await ExchangeInfo.create(info);
            }
            else { // 기준일 있으면 업데이트
                return await exchangeInfoResult;
            }
        },
        async deleteExchangeRate(root, { info }){
            return await ExchangeInfo.findOneAndDelete({
                src:info.src,
                tgt:info.tgt,
                date:info.date
            });
        }
    } 
}
