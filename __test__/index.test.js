const regExEmail = new RegExp(/^[^\d@#&<>\"~;$^%{}\-.\d?]+$/);

const email = ['Николай',
    'Nikolay',
    'Иванов Иванович',
    '0leg',
    'user@',
    '',
]

test('regExEmail', () => {
    expect(regExEmail.test(email[0])).toBe(true);
    expect(regExEmail.test(email[1])).toBe(true);
    expect(regExEmail.test(email[2])).toBe(true);
    expect(regExEmail.test(email[3])).toBe(false);
    expect(regExEmail.test(email[4])).toBe(false);
    expect(regExEmail.test(email[5])).toBe(false);
})
