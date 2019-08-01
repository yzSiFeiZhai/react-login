import React,{Component} from 'react'

export default  class Login extends Component{

    state ={
        arr:[
            {username:'aaa',password:123},
            {username:'bbb',password:123},
            {username:'ccc',password:123}
        ]
    }

    submit = (event)=> {
        event.preventDefault()
        const name = this.nameinput.value
        const psw = this.pswinput.value
        for(let i=0;i<this.state.arr.length;i++){
            if(name == this.state.arr[i].username&&psw == this.state.arr[i].password){
                alert('登录成功')
                break
            }else{
                alert('请输入正确的用户名或密码')
                break
            }
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submit}>
                    <fieldset>
                        <legend>用户登录</legend>
                        <div className="form-group">
                            <label>登录账户</label>
                            <input type="text" className="form-control" placeholder="请输入你的用户名或Email" ref={input => this.nameinput = input}/>
                        </div>
                        <div className="form-group">
                            <label>密码</label>
                            <input type="password" className="form-control" placeholder="请输入你的密码" ref={input => this.pswinput = input}/>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox"/>记住密码</label>
                        </div>
                        <button type="submit" className="btn btn-primary">登录</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}