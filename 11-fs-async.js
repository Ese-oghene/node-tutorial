const {readFile, writeFile} = require('fs')

readFile ('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
          console.log(err);
          return;  
        }
        console.log(result);
        readFile('./content/second.txt','utf8', (err, result)=> {
            if (err) {
             console.log(err)
             return   
            }
            const second = result
            writeFile('./contents/result-async.txt','utf8',
           `Here is the result : ${first}, ${second}` ,()=>{
            if (err) {
              console.log(err)
              return;
            }
            console.log(result);
           }
            )
        })
})

