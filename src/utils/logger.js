import {createLogger,transports, format}  from 'winston';

//----Logging-----//

const customLogger = createLogger(
    {
        transports:[
            new transports.Console({
                format: format.combine(
                    format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
                    format.colorize(),
                    format.simple(),
                    format.errors({stack:true}),            
                ),
            }),
            new transports.File({
                filename:'Custom.log',
                level:'info',
                format:format.combine(format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),format.json())
            }),
            new transports.File({
                filename:'Custom_Error.log',
                level:'error',
                format:format.combine(format.timestamp(),format.json())
            }),
        ],
       
        meta: true, 
        msg: "HTTP {{req.method}} {{req.url}}", 
        expressFormat: true, 
        colorize: false, 
        ignoreRoute: function (req, res) { return false; } 
    }
);


module.exports ={customLogger};