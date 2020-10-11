import React, { useEffect, useState } from 'react'
import { Form, Input } from 'antd';
import Button from '@material-ui/core/Button';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
import Divider from '@material-ui/core/Divider';


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
};


function AddQuestionContent(props) {

    const [show,setShow] = useState(true)

    const onFinish = values => {
        console.log('Received values of form:', values);
        props.handleEditSave(values)
    };

    const [vals, setVals] = useState([])

    useEffect(() => {
        props.ques && setVals(props.ques.options.map((val, index) => {
            return {
                name: index,
                key: index + 1,
                isListField: true,
                fieldKey: index+1,
                val:val,
        }}))
    }, [])

    return (
        <div>
            <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
                <Form.Item
                    label="Question:"
                    name="question"
                    rules={[
                        {
                            required: true,
                            message: <span style={{ color: 'red' }}>Please input question!</span>,
                        },
                    ]}
                    style={{ display: "flex", alignItems: "center", marginBottom: 15 }}
                    initialValue={props.ques ? props.ques.question : ""}
                >
                    <Input style={{ width: '450px', height: 40 }} />
                </Form.Item>
                <Form.List name="options">
                    {(fields, { add, remove }) => {
                        // fields.push(...vals)
                        // props.ques.options.map(field => add())
                        // console.log(fields)
                        // .concat(...props.ques.options)
                        return (
                            <div>
                                {show && vals.map((field, index) => (
                                    <div style={{ padding: '10px 0 10px 0' }}>
                                    {/* {console.log(field) && <></>} */}
                                    <Form.Item
                                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                        // label={index === 0 ? 'Option' : ''}
                                        required={false}
                                        key={field.key}
                                    // initialValue={field}
                                    >
                                        <Form.Item
                                            {...field}
                                            validateTrigger={['onChange', 'onBlur']}
                                            rules={[
                                                {
                                                    required: true,
                                                    whitespace: true,
                                                    message: <span style={{ marginLeft: 20, color: 'red', marginBottom: 20 }}>Please input Option or delete this field.</span>,
                                                },
                                            ]}
                                            //set the value here
                                            initialValue={field.val}
                                            noStyle
                                            style={{ margin: "20px 0px" }}
                                        >
                                            <Input placeholder="Option" className="antd-input" />
                                        </Form.Item>
                                            <MinusCircleOutlined
                                                className="dynamic-delete-button"
                                                style={{ margin: '0 8px' }}
                                                onClick={() => {
                                                    setShow(false)
                                                    // console.log(field)
                                                    remove(field.name);
                                                    // console.log(field)
                                                }}
                                            />
                                    </Form.Item>
                                </div>
                        ))}

                                {fields.map((field, index) => (
                                    <div style={{ padding: '10px 0 10px 0' }}>
                                        {/* {console.log(field) && <></>} */}
                                        <Form.Item
                                            {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                            // label={index === 0 ? 'Option' : ''}
                                            required={false}
                                            key={field.key}
                                        // initialValue={field}
                                        >
                                            <Form.Item
                                                {...field}
                                                validateTrigger={['onChange', 'onBlur']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        whitespace: true,
                                                        message: <span style={{ marginLeft: 20, color: 'red', marginBottom: 20 }}>Please input Option or delete this field.</span>,
                                                    },
                                                ]}
                                                //set the value here
                                                initialValue={field.val}
                                                noStyle
                                                style={{ margin: "20px 0px" }}
                                            >
                                                <Input placeholder="Option" className="antd-input" />
                                            </Form.Item>
                                            {fields.length > 1 ? (
                                                <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    style={{ margin: '0 8px' }}
                                                    onClick={() => {
                                                        setShow(false)
                                                        // console.log(field)
                                                        remove(field.name);
                                                        // console.log(field)
                                                    }}
                                                />
                                            ) : null}
                                        </Form.Item>
                                    </div>
                                ))}
                                <Form.Item style={{margin: '0px 0 0px 20px' }}>
                                    <Button
                                        color="primary"
                                        onClick={() => {
                                            setShow(false)
                                            add();
                                        }}
                                        style={{ width: '40%' }}
                                    >
                                        <PlusOutlined style={{marginRight: "10px"}}/>   Add option
                                    </Button>
                                </Form.Item>
                            </div>
                        );
                    }}
                </Form.List>
                <div className="form-footer" >
                    <Form.Item >
                        <Button color="primary" >
                            Cancel
                        </Button>
                    </Form.Item>
                    <Form.Item >
                        <Button autoFocus color="primary" type="submit">
                            Save
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default AddQuestionContent
