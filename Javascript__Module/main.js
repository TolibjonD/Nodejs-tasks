export class TaskManager {
    constructor() {

    }
    /**  1. a, b, c sonlari berilgan. Shu sonlardan uch xonali son yasang. Agar xohlagan son 0 ga teng yoki  kichik bo'lsa 0 ni konsolga chiqaring. **/
    task_1(a, b, c) {
        if (a <= 0 || b <= 0 || c <= 0) {
            return console.log(0);
        } else {
            if (a <= 9 && b <= 9 && c <= 9) {
                let result = 100 * a + 10 * b + c
                return console.log(result);
            }
            return console.log(0);
        }
    }

    //2 Berilgan son hafta kunining qaysi kuniga to'g'ri keladi . Agar kelgan son 1 ga teng bo'lsa 'Dushanba' ni konsolga chiqaring,  Agar kegan son ikkiga teng bo'lsa  'Seshanba' ni konsolga chiqaring va hz ..,  Agar hafta kuniga to'g'ri kelmasa 'none' konsolga chiqsin.
    task_2(num) {
        var days = ["", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"]
        let day;
        switch (num) {
            case 1:
                day = days[1]
                break;
            case 2:
                day = day = days[2]
                break;
            case 3:
                day = day = days[3]
                break;
            case 4:
                day = day = days[4]
                break;
            case 5:
                day = day = days[5]
                break;
            case 6:
                day = day = days[6]
                break;
            case 7:
                day = day = days[7]
                break;
            default:
                day = "none"
        }
        return console.log(day);
    }

    /* 3 Berilgan yill kabisa yili ekanligini aniqlang. Agar kabisa yili bo'lsa true  konsolga 
    chiqsin.  Agar bo'linmasa false  konsolga chiqsin. Kabisa yil deb 4 yilda bir marta keladigan 
    yilga aytiladi. Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili fevral oyida 29 kun 
    bo'ladi. */
    task_3(year) {
        let result = year % 4 === 0 && year % 100 != 0 || year % 4000 === 0
        return console.log(result);
    }

    //4 a soni berilgan. 1 - 999 sonlar orasida. Agar a soni 1 honali son bo'lsa 1 ni return qiling. Agar a soni 2 honali son bo'lsa 2 ni return qiling. Agar a soni 3 honali bo'lsa 3 ni return qiling.
    task_4(a) {
        let result;
        if (a <= 0) {
            result = "Negative number";
        } else {
            if (a >= 1000) {
                result = "Huge numer";
            }
            if (a <= 999 && a >= 100) {
                result = 3
            }
            if (a <= 99 && a >= 10) {
                result = 2
            }
            if (a <= 9 && a >= 1) {
                result = 1
            }
        }
        return console.log(result);
    }

    //5 a, b, c, d sonlar berilgan. Agar ularning qiymati barchasi musbat   bo'lsa true konsolga chiqaring bo'lmasa false ni konsolga chiqaring.
    task_5(a, b, c, d) {
        let result = a > 0 && b > 0 && c > 0 && d > 0 ? true : false
        return console.log(result);
    }

    //6 a soni berilgan.  0 dan a gacha bo'lgan sonlaryig'indisini toping  va yig'indini konsolga chiqaring. a sonini ham hisobga oling.
    task_6(a) {
        let sum = 0;
        for (let index = 0; index <= a; index++) {
            sum += index
        }
        return console.log(sum);
    }

    //7  a soni berilgan. Shu son mukammal raqam yoki yo'qmi shuni aniqlang. Agar mukammal raqam bo'lsa true bo'lmasa false konsolga chiqaring. Mukammal raqam deb bo'linuvchilar  yig'indisiga teng bo'ladigan songa (o'zidan tashqari) aytiladi. Deylik: a = 6, uning bo'linuvchilari 1,2,3 => 6 = 1 + 2 + 3   demak 6 raqami murakkab raqam hisoblanadi. a = 15, uning bo'linuvchilari 1,3,5, => 1 + 3 + 5 = 8    bo'linuvchilari yig'indisi 8ga teng 15 ga emas. Shuning uchun bu mukammal son emas
    task_7(a) {
        let nums = []
        for (let index = 0; index < a; index++) {
            if (a % index === 0) {
                nums.push(index)
            }
        }
        let sum = nums.reduce((el, last) => el + last)
        return console.log(sum === a);
    }

    //8. n soni berilgan. Shu sonni raqamlarini sonini  konsolga chiqaring. Misol: 123 -> raqamlari soni: 3
    task_8(n) {
        return console.log(n.toString().length);
    }

    //9. n soni berilgan. Berilgan son palindrome  ekanligini aniqlang. Agar bo'lsa true bo'lmasa false chiqaring. Masalan: n = 12321  bunda chap tomondan va o'ng  tomondan o'qisa ham bir hil bo'lishi kerak. Bu misolni while orqali ishlash yaxshiroq edi lekin for ni o'rganish uchun for da ishlaymiz .
    task_9(n) {
        const str = n.toString();
        const len = str.length;
        for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return console.log(false);;
            }
        }
        return console.log(true);;
    }

    //10. n  soni berilgan. Shu sonni raqamlarini yig'indisini toping.
    task_10(n) {
        let sum = 0;
        for (let index = 0; index < n.toString().length; index++) {
            sum += parseInt(n.toString()[index])
        }
        return console.log(sum);
    }

    //11. array[] berilgan. Shu massivni teskarisini yangi massivga ko'chirib o'tkazing va konsolga chiqaring.
    task_11(arr) {
        let newArr = []
        for (let index = arr.length - 1; index >= 0; index--) {
            newArr.push(arr[index])
        }
        return console.log(newArr);
    }

    //12. n va array[] berilgan. Shu massivda nechta n soni borligini topib konsolga chiqaring. Masalan:  n = 4 , array[2,4,6,4,], Natija: bu yerda 2 ta 4 bor.
    task_12(n, array) {
        let total = 0
        for (let index = 0; index < array.length; index++) {
            if (array[index] === n) {
                total += 1
            }
        }
        return console.log(total);
    }

    //13.  a, array[] berilgan. Arrayning xohlagan ikkita  elementlarini  yig'indisi a ga teng bo'lishini aniqlang va ularni  konsolga chiqaring.
    task_13(a, arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] === a) {
                    return console.log(arr[i], arr[j]);;
                }
            }
        }
        console.log("No pair found");
    }

    //14. Sonlardan iborat massiv berilgan. Shu massivni  elementlarini o'sish tartibida jo'ylashtiring (sort by increasing (ascending) ) va hosil bo'lgan massivni ni konsolga chiqaring.
    task_14(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return console.log(arr);
    }

    // 15. Sonlardan iborat massiv berilgan. Shu massivdagi eng katta ikkinchi  elementni toping. Bunda array elementlari bir biriga teng emas deb oling.
    task_15(arr) {
        let num = arr.sort((a, b) => b - a);
        return console.log(arr[1]);
    }

}
