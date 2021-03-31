<template>
    <div id="today">

    </div>
</template>

<script>
    import GenerateUUID from "../assets/GenerateUUID";


    export default {
        name: "Today",
        components: {

        },
        data(){
            return{
                type : 'today',
                isCreating : false,
                newTodo : {
                    context: '',
                    time: '',
                },
            }
        },
        computed: {
            todoList(){
                let todoList=this.$store.state.todoList.filter(todo=>todo.type==='today')
                todoList.sort(function (a , b) {
                    let timeA=parseInt(a.time)
                    let timeB=parseInt(b.time)
                    return timeA-timeB
                })
                return todoList
            }
        },
        methods: {
            createTodo(){
               this.isCreating=!this.isCreating
            },

            submitNewTodo(){
                let date=new Date().toLocaleDateString();
                let time=this.newTodo.time
                let context=this.newTodo.context
                let id=GenerateUUID()

                let newTodo={
                    id: id,
                    context: context,
                    date: date,
                    time: time,
                    type: 'today',
                    childItem: null,
                    parentItem: null
                }
                this.$store.commit('ADD_TODO' , newTodo)
            },

        },
    }
</script>

<style scoped lang="less">
    @import "../assets/variables";

    #todo-item{
        margin-left: 20px;
        width: @width;


    }
</style>