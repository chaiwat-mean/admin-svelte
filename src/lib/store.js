import { writable } from 'svelte/store';

export const table = writable("logs");

export const dashboard_com1 = writable(
    {
        approved: {
            icon: "",
            title: "Approved partners",
            sum: 0
        },
        transactions_made:{
            icon: "",
            title: "Transactions made",
            sum: 0
        },
        logs:{
            icon1: "",
            icon2: "",
            title: "Logs from users",
            sum: 0
        }
    }
)

export const dashboard_com2 = writable(
    {
        charge_back_transactionlist: {
            icon: "",
            title: "Charge Back Transactions List",
            sum: 0,
            table: [
                {
                    transaction: "MSTRSTxxxxxxxxxxxxxxxxx",
                    amount: 9797,
                    date: "February 22, 2022"
                },
                {
                    transaction: "MSTRSTxxxxxxxxxxxxxxxxx",
                    amount: 4804,
                    date: "February 22, 2022"
                },
                {
                    transaction: "MSTRSTxxxxxxxxxxxxxxxxx",
                    amount: 1214,
                    date: "February 22, 2022"
                },
                {
                    transaction: "MSTRSTxxxxxxxxxxxxxxxxx",
                    amount: 3333,
                    date: "February 22, 2022"
                }
            ]
        }
    }
)

export const dashboard_com3 = writable({
    todolist: {
        icon: "",
        title: "Things to do Lists",
        sum: 0,
        create_title: "Create",
        see_more_title: "See more"
    },
    active_task:{
        title: "Active Tasks",
        data: [
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                descrition: "New project X"
            }
        ]
    }

})


export const dashboard_com4 = writable(
    {
        user_logs_table:{
            title: "",
            data: [
                {
                    name: "Miss Alfred Little",
                    datetime: "14/06/22 20:22",
                    detail: "....."
                }
            ]
        }
    }
)