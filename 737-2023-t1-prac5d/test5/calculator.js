const express = require("express");
const res = require("express/lib/response");
const app = express();


const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

const add = (n1, n2) => {
    return n1+n2;
}

app.get("/add", (req,res)=>{
    try{
        const n1=parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        logger.info('Parameters '+n1+' and '+n2+' received for addition');//标记
        if(isNaN(n1)){
            logger.error("n1 is incorrectly defined");//标记
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)){
            logger.error("n2 is incorrectly defined");//标记
            throw new Error("n2 incorrectly defined");
        }

        const result = add(n1,n2);
        res.status(200).json({statuscode:200, data:result});
    }catch(error){
        console.error(error)
        res.status(500).json({statuscode:500, msg: error.toString()})
    }
});
const port=3040;
var a = add(26,8);
console.log(a);
app.listen(port,()=>{
    console.log("hello I'm listening to port "+port);
})