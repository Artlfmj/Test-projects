const Auth = require('./auth');
const axios = require('axios').default;
const Discord = require('discord.js');
const fs = require('fs');
const Endpoints = require('./utils/endpoints');
const path = './deviceAuthDetails.json';


    console.log(1)
    const auth = new Auth();
    console.log(2)
    const token = auth.login(null, '').then(token => {
        console.log(token);
    const { accountId } = require('./deviceAuthDetails.json');

    // Get Kairos Color
    let kcolor = client.sessions.get(`kcolor${tagName}`);

    const response34 = axios.post(`https://channels-public-service-prod.ol.epicgames.com/api/v1/user/setting?accountId=${accountId}&settingKey=avatar&settingKey=avatarBackground`, {}, { headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.access_token}`,
        } }).catch((err) => {
            console.error(err);
        })
        .then(doc =>{
            console.log(doc)
        })
    })
    
    
        
