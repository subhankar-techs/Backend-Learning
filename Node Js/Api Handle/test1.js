const http = require('http');

const FoodList=[
    {foodName:"Pizza",foodPrice:200},
    {foodName:"Burger",foodPrice:150},
    {foodName:"Pasta",foodPrice:250},
    {foodName:"Salad",foodPrice:100},
]

port=1010;

http.createServer((req,res)=>{

    if (req.url=="api/foodlist"){

         res.setHeader('Access-Control-Allow-Origin','*');
          res.setHeader('Access-Control-Allow-Methods','GET, POST,PUT,DELETE');
          res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');

        res.setHeader('Content-Type','application/json; charset=utf-8');
        res.end(JSON.stringify(FoodList));
        res.end('');
    }
    else{
        res.setHeader('Content-Type','text/html; charset=utf-8');
        res.write("<h1>Welcome to the Food List API</h1>");
        res.end();
    }
    }).listen(port,()=>{
    console.log("Server is running on port "+port);
})
