const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // حفظ تفضيل المستخدم في التخزين المحلي
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// تحميل تفضيل المستخدم عند تحميل الصفحة
window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // منع الإرسال الفوري

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // تحقق من صحة الإدخالات
    if (name === '' || email === '' || message === '') {
        alert('يرجى ملء جميع الحقول المطلوبة.');
        return;
    }

    // يمكنك إضافة رمز هنا لإرسال النموذج (مثل إرسال البيانات إلى خادم)
    alert('شكراً لتواصلك معنا، سيتم الرد عليك قريباً!');

    // إعادة تعيين النموذج بعد الإرسال
    document.getElementById('contact-form').reset();
});


