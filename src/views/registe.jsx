import React,{Component} from 'react'

export default  class Registe extends Component{

    zhuce = (event)=>{
        event.preventDefault()
        const name = this.nameinput.value
        const psw1 = this.pswinput1.value
        const psw2 = this.pswinput2.value
        if(psw1 === psw2){
            alert('注册成功')
        }else{
            alert('输入的密码不一致')
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.zhuce}>
                    <fieldset>
                        <legend>用户注册</legend>
                        <div className="form-group">
                            <label>注册账户</label>
                            <input type="text" className="form-control" placeholder="请输入你的用户名" ref={input => this.nameinput=input}/>
                        </div>
                        <div className="form-group">
                            <label>密码</label>
                            <input type="password" className="form-control" placeholder="请输入你的密码" ref={input => this.pswinput1=input}/>
                        </div>
                        <div className="form-group">
                            <label>确认密码</label>
                            <input type="password" className="form-control" placeholder="请输入你的密码" ref={input => this.pswinput2=input}/>
                        </div>
                        <button type="submit" className="btn btn btn-primary" >注册</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}