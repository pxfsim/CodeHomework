import Vue from 'vue'
import Message from './Message.vue'

const Builder = Vue.extend(Message)

let instance = null

class GetMessage {
    constructor(option) {
        this.option = option
    }

    init(){
        if (instance == null) {
            instance = new Builder({
                render:(h)=>{
                    console.log('render:',h)
                    return(
                        <Message props={{...this.option}}>
                                <button style="height:30px;width:80px" slot="content">btn</button>
                        </Message>
                    )
                }
            })
            instance.vm = instance.$mount()
            document.body.appendChild(instance.vm.$el)
            setTimeout(()=>{
                instance.vm.$el.remove()
                instance = null
            }, 3000)
        }
        return instance
    }
}
const product = (option) =>{
    return new GetMessage(option)
};

export default {
    install(vue) {
      vue.prototype.$Message = product
    }
}
  