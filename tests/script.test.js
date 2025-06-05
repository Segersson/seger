const { getSvar } = require('../script');

test('ger barnsvar när frågan innehåller ordet "barn"', () => {
    const resultat = getSvar('Vad säger lagen om barn?');
    expect(resultat).toMatch(/barnets rätt/i);
});
