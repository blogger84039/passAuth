const PASS = '01738Utlk923'
const USER_PASS = document.getElementById('input_01');
const BTNCLK = document.getElementById('button_01');

const PASS_CHECK = () => {
    if (USER_PASS.value == PASS) {
        alert('認証成功！！！')
    } else {
        alert('認証失敗')
    }
}

BTNCLK.addEventListener('click', () => {
    PASS_CHECK();
    USER_PASS.value = '';
})