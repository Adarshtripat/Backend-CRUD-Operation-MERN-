import { request, response } from "express";
import studentSchema from "../model/studentSchema.js";

//registration part
export const addStudentController = async(request,response)=>{
    try{
    const result = await studentSchema.create(request.body)
    console.log("Result",result);
    response.status(201).send({status:true});
    }catch(error){
        console.log("Error While adding Student",error);
        response.status(500).send ({status:false});

    }
}
//login part
export const loginStudentController = async(request,response)=>{
    //check karne ke leye logical and operator ka use karte hy
    try{
        const search = {
            $and:[
                {email:request.body.email},
                {password:request.body.password}
            ]
        }
     const res =  await studentSchema.findOne(search)
     console.log(res);
     response.status(201).send({status:true})
     
    }catch(error){
        console.log("Error While adding Student",error);
        response.status(500).send ({status:false});
    }
}
//view student list part
export const viewStudentListController = async(request,response)=>{
    try{
        const studentList = await studentSchema.find();
        console.log('studentList :',studentList);
        //ab data ko vejna hy list Dikane ke leye
        response.status(200).send({status:true,studentList:studentList});
        
    }catch(error){
        console.log("Error While adding Student",error);
        response.status(500).send ({status:false});

    }
}
//update part
export const updateStudentController = async(request,response)=>{
    try{
       const res = await studentSchema.updateOne({email:request.body.email},request.body);
       console.log("Res :",res);
       response.status(201).send({status:true});
       
    }catch(error){
        console.log("Error while update StudentForm",error);
        response.status(500).send ({status:false});

    }
}
//delete part
export const deleteStudentController  = async(request,response)=>{
    try{
       const res = await studentSchema.deleteOne({email:request.body.email});
       console.log("Res :",res);
       response.status(201).send({status:true});
       
    }catch(error){
        console.log("Error while update StudentForm",error);
        response.status(500).send ({status:false});

    }
}