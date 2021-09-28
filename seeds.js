const mongoose = require("mongoose");
const article = require("./models/article");
const Comment   = require("./models/comment");

const data = [
    // {
    //     title: "STUNNING LOOK", 
    //     image: "https://sun9-77.userapi.com/impg/KwPdujXK0T0D5vAxjyVPx4zkpjAIjJZjyxtA_Q/0U_m0RNxErk.jpg?size=1438x1439&quality=96&sign=51046e2317001c453a7bd53892168b70&type=album.jpeg",
    //     description: "Goddes. Beauty itself. Mind blowing",
    //     theme: "Recent news",
        
    // },
    // {
    //     title: " left eye.", 
    //     image: "https://sun9-44.userapi.com/impg/TxvccU7zwtzp6DsEhuippS5TDk1yIFqJjM7Jyg/ODOdTlcj_3M.jpg?size=624x626&quality=96&sign=2fc8c97f88369678bda2c9671badf363&type=album.jpeg",
    //     description: "blah blah blah",
    //     theme: "Beauty"
    // },
    // {
    //     title: "mouth.", 
    //     image: "https://sun9-78.userapi.com/impg/25AmypoN1Bu_FhbRKRCbtDV23OqRYuQN8N-ctQ/-9545SbuAqg.jpg?size=343x342&quality=96&sign=28e7315768af756ad8045d7833866ba4&type=album.jpeg",
    //     description: "blah blah blah",
    //     theme: "Beauty"
    // },
    // {
    //     title: "right eye.", 
    //     image: "https://sun9-26.userapi.com/impg/FZObBh5DYaeYh8xOGTi55wnw0TcrCgYNAXVzvg/zJ8z6pjm6r8.jpg?size=623x624&quality=96&sign=fc33369dd61310569f877789824eb9d6&type=album.jpeg",
    //     description: "blah blah blah",
    //     theme: "Beauty"
    // },
    // {
    //     title: "Ferrari", 
    //     image: "https://sun9-45.userapi.com/impg/mmCCWVgmIFXQwC9v9wwHiMwOk6DmaVHwiEMuEw/7nzZc1ZfPZE.jpg?size=900x675&quality=96&sign=0c191a5018418a928fe6df5c2c629587&type=album",
    //     description: "nice car",
    //     theme: "Cars"
    // },
    // {
    //     title: "Mustang", 
    //     image: "https://sun9-14.userapi.com/impg/6bsMQjeUuwKDgkZ5T6eM2WcgUd0FVKdDpUKKpA/o1YKsBikEkI.jpg?size=1280x960&quality=96&sign=ddde8c459c03656848111fe23da1ff77&type=album",
    //     description: "nice car",
    //     theme: "Cars"
    // },
    // {
    //     title: "Porsche", 
    //     image:  "https://sun9-12.userapi.com/impg/ZJ24y4GzEyyKMnO3kEjOpjq7QyjWc34VDGKOlQ/Ob-csFwOT6k.jpg?size=2048x1360&quality=96&sign=35b01b03661aed60d2efc844ea2e1bcc&type=album",
    //     description: "nice car",
    //     theme: "Cars"
    // },
    // {
    //     title: "Красивый лес", 
    //     image:  "https://sun2.dataix-by-minsk.userapi.com/impg/XOI6lJVgZSZOsMJkK849Rokpbi-GOz65arQ_iA/3yE_RJDBvdI.jpg?size=1280x853&quality=96&sign=dcffbab6193d6a9512daa1f5aab60074&type=album",
    //     description: "ооооочень красивый лес",
    //     theme: "Лес"
    // },
    // {
    //     title: "Ещё более красивый лес", 
    //     image:  "https://sun9-40.userapi.com/impg/aBFn3hq-hG9cs3TBVpkKje2621h8cuCz8iV3Xg/dMamMF-VvO4.jpg?size=1280x854&quality=96&sign=607976dd160cabe310a57261cc5fb1c8&type=album",
    //     description: "великолепный лес",
    //     theme: "Лес"
    // },
    // {
    //     title: "Ещё более красивый лес", 
    //     image:  "https://sun1.dataix-by-minsk.userapi.com/impg/nxZbLbSQpFDQIOUcIV4z-vytJ3pE74LHvQ0R8g/SmfUZJdRhmU.jpg?size=1080x1080&quality=96&sign=fae4a78d9d67597c361dc6ea8e0bdb35&type=album",
    //     description: "великолепный лес",
    //     theme: "Лес"
    // },
    // {
    //     title: "Перевоплащение Павла", 
    //     image:  "https://sun9-55.userapi.com/impg/m4VLKcowkY9yRem9LpXc9yhk53-as2rnsHzF-A/Gqx3EOhkIv0.jpg?size=1052x1386&quality=96&sign=a44f9f5be8f3fe53386185d6be4a645c&type=album",
    //     description: "Павел превратился в Глеба. Стал змеем горынычем",
    //     theme: "Универ"
    // },
    // {
    //     title: "Павла Нагорская", 
    //     image:  "https://sun9-45.userapi.com/impg/UHBjJCeLcDpNPnl0nXtbcSw4_DMM6MnGIVjkSA/yVyGhDLSLc4.jpg?size=279x604&quality=96&sign=b905e24518d5d388a295d9cce016fde2&type=album",
    //     description: "Письмо от  князя! азязя",
    //     theme: "Универ"
    // },
    // {
    //     title: "Сидим на фп", 
    //     image:  "https://sun9-2.userapi.com/impg/AI28WoJ8W9OUIdaxi-eMiUYknZN5F0SOGAez9Q/KiKVsgxoGRs.jpg?size=1600x1200&quality=96&sign=7ae4787adbe4aa81dceb8700165e8338&type=album",
    //     description: "Сделайте пожалуйста лабу по фп:((",
    //     theme: "Универ"
    // },
    // {
    //     title: "Собаки))0", 
    //     image:  "https://vk.com/video293929387_456240050?list=444ddf185a462dbe04",
    //     description: "Гавкают на льва:((",
    //     theme: "видео"
    // },
    // {
    //     title: "Упали", 
    //     image:  "https://vk.com/video293929387_456240049",
    //     description:"Вот что спорт с людьми делает",
    //     theme: "видео"
    // },
    // {
    //     title: "Мой китик", 
    //     image:  "https://vk.com/video293929387_456239540",
    //     description: "Был... к сожалению:((",
    //     theme: "видео"
    // },
    // {
    //     title: "шутка-минутка", 
    //     image:  "https://sun9-87.userapi.com/impg/U0skxT2yNcosObbHM9SGTbtR6WCFhNPebSrL8w/8nW9kT6pl4A.jpg?size=550x604&quality=96&sign=f1b1cc6a21437c33209df13789ed3174&type=album",
    //     description: "очень смешной прикол",
    //     theme: "Приколы"
    // },
    // {
    //     title: "прикол", 
    //     image:  "https://sun9-13.userapi.com/impg/cVt4nKk_8ToBxj43PKG4SHykWKfPlAuF6mOpPw/5ac5ql_8l6o.jpg?size=480x580&quality=96&sign=08ff01410e778923f2ee0e2369f370d3&type=album",
    //     description:"несмешной прикол",
    //     theme: "Приколы"
    // },
    // {
    //     title: "Прикольчик", 
    //     image:  "https://sun9-84.userapi.com/impf/c540102/v540102726/1de36/nnJRNYxTgCQ.jpg?size=480x483&quality=96&sign=09d395dab11ab8c60b360435f765a48f&type=album",
    //     description: "прикольный прикол",
    //     theme: "Приколы"
    // },
]

function seedDB(){
// //    Remove all news
//    article.remove({}, function(err){
//         if(err){
//             console.log(err);
//         }
//         console.log("removed all articles!");
//          //add some news
        data.forEach(function(seed){
            article.create(seed, function(err, article){
                if(err){
                    console.log(err)
                } else {
                    console.log("added an article");
                    //create a comment
                //     Comment.create(
                //         {
                //             text: "comment from seed",
                //             author: "Homer"
                //         }, function(err, comment){
                //             if(err){
                //                 console.log(err);
                //             } else {
                //                 article.comments.push(comment);
                //                 article.save();
                //                 console.log("Created new comment");
                //             }
                        // });
                }
            });
        });
    // }); 
}
module.exports = seedDB;