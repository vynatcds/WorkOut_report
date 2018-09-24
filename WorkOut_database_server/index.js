const express = require('express');
const cors = require('cors');
const mysql =require('mysql');

const app = express();
const Promise = require('promise');
const bodyParser = require('body-parser');


const connection = mysql.createConnection({
	host : 'localhost',
	user : 'cad_account',
	password : 'cad_admin',
	database : 'workout_report',
	insecureAuth: true
});

connection.connect(err=>{
	if(err) return console.log(err);
	console.log('Sucessful connect to database');
});

//console.log(connection);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
	res.send('go to /user to see all user');
	
});

/*app.get('/user/register',(req,res)=>{
	const { First_Name,Last_Name,Birth_Date,Email,Phone_Number,Position,Username,Password,
Identification_Number	} = req.query;
	const INSERT_USERS_QUERY = `INSERT INTO tb_user (First_Name,Last_Name,Birth_Date,Email,Phone_Number,Position,Username,`
	+`Password,Identification_Number) values('${First_Name}','${Last_Name}','${Birth_Date}','${Email}',`
+`'${Phone_Number}','${Position}','${Username}','${Password}','${Identification_Number}')`;
	connection.query(INSERT_USERS_QUERY,(err,results)=>{
		if(err) {
			
			return res.send(err);
		}
		else {
			return res.send('Users adding Sucessfully');
		}
	});
	
}); 
*/

app.post('/user/register',(req,res)=>{
	//console.log(req.body);
	const { First_Name,Last_Name,Birth_Date,Email,Phone_Number,Position,Username,Password,
Identification_Number	} = req.body;

const INSERT_USERS_QUERY = `INSERT INTO tb_user (First_Name,Last_Name,Birth_Date,Email,Phone_Number,Position,Username,`
	+`Password,Identification_Number) values('${First_Name}','${Last_Name}','${Birth_Date}','${Email}',`
+`'${Phone_Number}','${Position}','${Username}','${Password}','${Identification_Number}')`;
	
	
	   function register() {
        return new Promise((resolve,reject)=> {
				connection.query(INSERT_USERS_QUERY,(err,results)=>{
					if(err) {
						
						reject([{"msg":err}])
					}
					else {
						//console.log('Users adding Sucessfully');
						var errorsArr = [];
                    errorsArr.push({"msg":"Users adding Sucessfully."});
                    resolve(errorsArr);
					}
				}); 
			});
	   }
			register().then((data)=>{
				//console.log(data);
				res.send(data);
				next();
			});
});


app.post('/users',(req,res)=>{
	const { Username,Password } = req.query;
	const SELECT_ALL_USER_QUERY = `SELECT * FROM tb_user where Username='${Username}' and Password ='${Password}'`;
	connection.query(SELECT_ALL_USER_QUERY,(err,results)=>{
		if(err) {
			
			return res.send(err);
		}
		else {
			return res.json({
			data:results
			});
		}
	});
	
	
});



app.listen(4000,()=>{
	console.log(`WorkOut_Report_Database_Server listening on port 4000`);
});