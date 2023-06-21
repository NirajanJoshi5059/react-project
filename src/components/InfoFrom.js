import React from 'react'
import {
    Input,
    Checkbox,
    Select, Option,
    Button, Textarea,
    Typography,
    Radio,
} from "@material-tailwind/react";
import { useFormik } from 'formik';


const InfoFrom = () => {

    const formik=useFormik({
        initialValues:{
            username:'',
            email:'',
            gender:'',
            hobby:[],
            country:'',
            msg:'',
            image:null,
            preview:'',
        },
        onSubmit:(val) => {
            console.log(val)
        }
    });


    const checkData = [
        { label: "Dance", name: 'dance', value: 'dance', color: 'blue', id: 'dance' },
        { label: "Sing", name: 'sing', value: 'sing', color: 'green', id: 'sing' },
        { label: "Coding", name: 'coding', value: 'coding', color: 'red', id: 'coding' },
        { label: "Music", name: 'music', value: 'music', color: 'amber', id: 'music' },
    ];

    const selectCountry = [
        { label: 'Nepal', value: 'nepal' },
        { label: 'India', value: 'india' },
        { label: 'China', value: 'china' },
        { label: 'USA', value: 'usa' },
    ];
    return (
        <div className='max-w-xl shadow-2xl px-12 py-9 mx-auto'>

            <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register.
            </Typography>
            <form onSubmit={formik.handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    name='username' 
                    size="lg" label="Name" type='text' />
                    <Input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    name='email'
                    size="lg" label="Email" type='email' />

                    <div >
                        <h1>Select Your Gender</h1>
                        <Radio onChange={formik.handleChange} id="male" name="gender" label="Male" value='male' />
                        <Radio onChange={formik.handleChange} id="female" name="gender" label="Female"  value='female'/>
                    </div>

                    <div className='space-y-2'>
                        <h1>Selet Your Hobbies</h1>
                        {checkData.map((c, i) => {
                            return <Checkbox 
                            onChange={formik.handleChange}
                            value={c.value} 
                            key={i} color={c.color} label={c.label} name='hobby' id={c.id} />
                        })}
                    </div>

                    <div className="space-y-2">
                        <h1>Select Your Country</h1>
                        <Select label="Select Country" 
                        onChange={(e) => formik.setFieldValue('country',e)}>
                            {selectCountry.map((c, i) => {
                                return <Option key={i} value={c.value}>{c.label}</Option>
                            })}

                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Textarea name='msg' onChange={formik.handleChange}
                        value={formik.values.msg} label="Message" />
                    </div>
                    <div>
                    <Input 
                    onChange={(e)=>{
                        const file=e.target.files[0];
                        formik.setFieldValue('image', file);
                        const reader=new FileReader();
                        reader.readAsDataURL(file);
                        reader.addEventListener('load', (e)=>{
                          formik.setFieldValue('preview',e.target.result);  
                        })
                    }}
                    name='image'
                    size="lg" label="Image" type='file' />
                    </div>
                   {formik.values.preview && <img className='h-[200px]' src={formik.values.preview} alt='Loading...'/>}

                </div>

                <Button type='submit' className="mt-6" fullWidth>
                    Submit
                </Button>
                {/* <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                    >
                        Sign In
                    </a>
                </Typography> */}
            </form>
        </div>

    )
}

export default InfoFrom
