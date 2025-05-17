
// let pro = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let Api= true;
//         if(Api){
//             resolve("my promise is solve")
//         }else{
//             reject("my promise is is rejected");
            
//         }
//     },3000)

// })
// let data =pro;
// console.log(data);
// pro.then((resolve)=>{
//     console.log(resolve);
// }).catch((reject)=>{
// console.log(reject);
// })

// // value get krne k liye hum dotthen or dotcatch ka use krte hai
// //dotthen tub chalega jub hamara promise resolve huga 
// pro.then(function(resolve){
//     console.log(resolve);
//     // jub promise reject huga tu dotthen chalega
// }) .catch(function(reject){
//  console.log(reject)
// });
// async await replace .then and .catch
// console.log("helo")
// let pro = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let Api =true;
// if(Api){
//     resolve("promise fulfill");  
// }else{
//     reject("promise is rejected")
// }
//     },4000)
// });
// async function check() {
//     let data = await pro;
//     console.log(data);

// };
// check();
// try and catch 

// try{
//     console.log("try is start");
//     add();
//     console.log("try is end")
// }catch{
//     console.log("error is coming");
// }
// javascript line by line chalti hai lakin kuch kam aise hute hai ju turant nahi hute wo background mai chal rahe hute hai aise kamko hum asynchronous kehte hai.
// ek easy example 
// console.log("hello");
// setTimeout(()=>{
//     console.log("hello world ");

// },2000);
// console.log("hello after settimeout");
// is ka mtlb hai set time out aik asynchronous function hai 

//   promis in java script
// aik wada ki timing "pending"resolve mtlb wada pora krna reject mtlb wada pora nhi krna 
//  mostly us in fetching Api
//  let pro = new Promise(function(resolve,reject){
//   setTimeout(function(){
//       let Api = true;
//     if(!Api){
//         resolve("promise is resolved");

//     }else{
//         reject("my promise is rejected");

//     }
//   },3000)
//  });
//   let data = pro;
//   console.log(data) 
// pro.then(function(resolve){
//     console.log(resolve);

// }).catch(function(reject){
//     console.log(reject)
// })
// console.log("hello")
//  let pro = new Promise(function(resolve, reject){
//    setTimeout(function(){
//      let Api = true;
//     if(Api){
//         resolve("my promise is resolved")
//     }else{
//     reject("my promise is rejected");
//     }
//    },3000)
//  })
//   let data = pro;
//   console.log(data);
//  pro.then(function(resolve){
//     console.log(resolve);
//  }).catch(function(reject){
//     console.log(reject);
//  })
//  async and await
// let pro = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         let Api = true;
// if(Api){
//     resolve("promise is solved");

// }else{
//     reject("promise is rejected");
// }
//     }, 3000);
// });

// async function check() {
//     let data = await pro;
//     console.log("exicuting");
//     console.log(data)
    

// };
// check();
// let a = check();
// console.log(a)