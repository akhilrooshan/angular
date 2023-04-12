const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express()
const port = 8765
app.use(bodyParser.json())
const users=require("./connectdb")
const campaign = require('./connectdb')
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
var corsOptions = {
    origin: "*"
  };
app.use(cors(corsOptions));
app.post("/campaign",(req,res)=>{
    const {id,campaignName,status,Ctr,startDate,applicationCategory,applicationCategoryValues} = req.body
    const s = campaign.create(req.body).then((data)=>{
      res.json({data})
    }).catch((err)=>
    {
      res(err)
    })
  })
app.get("/getCampaign",(req,res)=>{
    campaign.findAll().then((data)=>{
        res.json({data})
    }).catch((err)=>{
        console.log(err)
    })
})
app.delete("/delOneCampaign/:id",(req,res)=>{
    const varId = req.params.id;
    return campaign.destroy({where:{id:varId}}).then((data)=>{
      res.status(200).json(data)
    }).catch((err)=>{
      console.log(err);
    })
  })
  app.delete("/delCampaign",(req,res)=>{
    return campaign.destroy({where:{}}).then((data)=>{
      res.status(200).json(data)
    }).catch((err)=>{
      console.log(err);
    })
  })
app.get("/filterCampaign/:value",(req,res)=>{
  const val=req.params.value;
  campaign.findAll({where:{status:val}}).then((data)=>{
    res.json(data)
  }).catch((err)=>{
    console.log(err)
  })
})
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })