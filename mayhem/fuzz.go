package fuzz

import "strconv"
import "github.com/beancount-gs/script"

func mayhemit(bytes []byte) int {

    var num int
    if len(bytes) < 1 {
        num = 0
    } else {
        num, _ = strconv.Atoi(string(bytes[0]))
    }
    switch num {
        case 1:
            content := string(bytes)
            script.LoadLedgerAccounts(content)
            return 0

        default:
            content := string(bytes)
            script.GetAccountIconName(content)
            return 0
    }
}

func Fuzz(data []byte) int {
    _ = mayhemit(data)
    return 0
}