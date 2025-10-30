const tests = [
    ...[
        [1, 2, [2, 1]], [0, 0, [0, 0]], [10, -5, [-5, 10]], ["a", "b", ["b", "a"]],
        [true, false, [false, true]], [NaN, undefined, [undefined, NaN]],
        [null, 1, [1, null]], [99, 100, [100, 99]], [[], {}, [{}, []]], ["x", "x", ["x", "x"]]
    ].map((t, i) => ({ name: `swapValues #${i + 1}`, run: () => swapValues(t[0], t[1]), expect: t[2] })),

    ...[
        ["Juan", "Pérez", "Hello, Juan Pérez"], ["Ana", "López", "Hello, Ana López"],
        ["", "Smith", "Hello,  Smith"], ["Pedro", "", "Hello, Pedro"],
        ["a", "b", "Hello, a b"], ["J", "K", "Hello, J K"],
        ["María", "del Mar", "Hello, María del Mar"], ["Andrés", "Gómez", "Hello, Andrés Gómez"],
        ["Juan Carlos", "Pérez", "Hello, Juan Carlos Pérez"], ["null", "undefined", "Hello, null undefined"]
    ].map((t, i) => ({ name: `greet #${i + 1}`, run: () => greet(t[0], t[1]), expect: t[2] })),

    ...[
        [10, 5, 25], [3, 4, 6], [6, 6, 18], [0, 10, 0], [10, 0, 0],
        [2.5, 4, 5], [100, 50, 2500], [1, 1, 0.5], [7, 8, 28], [5, 9, 22.5]
    ].map((t, i) => ({ name: `triangleArea #${i + 1}`, run: () => triangleArea(t[0], t[1]), expect: t[2] })),

    ...[
        [0, 32], [100, 212], [-40, -40], [20, 68], [37, 98.6],
        [10, 50], [30, 86], [-10, 14], [50, 122], [15, 59]
    ].map((t, i) => ({ name: `celsiusToFahrenheit #${i + 1}`, run: () => celsiusToFahrenheit(t[0]), expect: t[1] })),

    ...[
        [10, 3, 1], [9, 3, 0], [7, 5, 2], [100, 9, 1], [0, 5, 0],
        [5, 2, 1], [12, 6, 0], [11, 4, 3], [99, 10, 9], [8, 8, 0]
    ].map((t, i) => ({ name: `getRemainder #${i + 1}`, run: () => getRemainder(t[0], t[1]), expect: t[2] })),

    ...[
        [5, "Positive"], [-2, "Negative"], [0, "Zero"], [99, "Positive"], [-100, "Negative"],
        [0.1, "Positive"], [-0.1, "Negative"], [Infinity, "Positive"], [-Infinity, "Negative"], [NaN, "Zero"]
    ].map((t, i) => ({ name: `checkNumber #${i + 1}`, run: () => checkNumber(t[0]), expect: t[1] })),

    ...[
        [4, "Even"], [5, "Odd"], [0, "Even"], [-2, "Even"], [-3, "Odd"],
        [100, "Even"], [101, "Odd"], [99998, "Even"], [99999, "Odd"], [2.5, "Odd"]
    ].map((t, i) => ({ name: `isEven #${i + 1}`, run: () => isEven(t[0]), expect: t[1] })),

    ...[
        [1, 2, 2], [2, 1, 2], [0, 0, 0], [-1, 5, 5], [10, -5, 10],
        [100, 50, 100], [-10, -20, -10], [3.5, 3.6, 3.6], [Infinity, 1, Infinity], [-Infinity, 0, 0]
    ].map((t, i) => ({ name: `maxOfTwo #${i + 1}`, run: () => maxOfTwo(t[0], t[1]), expect: t[2] })),

    ...[
        [5, "Child"], [12, "Child"], [15, "Teen"], [17, "Teen"], [25, "Adult"],
        [64, "Adult"], [65, "Senior"], [80, "Senior"], [0, "Child"], [100, "Senior"]
    ].map((t, i) => ({ name: `ageCategory #${i + 1}`, run: () => ageCategory(t[0]), expect: t[1] })),

    ...[
        ["1234", "Access granted"], ["4321", "Access denied"], ["", "Access denied"],
        ["0000", "Access denied"], ["abcd", "Access denied"],
        [" 1234", "Access denied"], ["12345", "Access denied"], ["1234 ", "Access denied"],
        [null, "Access denied"], [undefined, "Access denied"]
    ].map((t, i) => ({ name: `checkPassword #${i + 1}`, run: () => checkPassword(t[0]), expect: t[1] })),

    ...[
        ["hola", 4], ["", 0], [" ", 1], ["12345", 5], ["ñandú", 5],
        ["Hello world", 11], ["test", 4], ["!@#", 3], ["áéíóú", 5], ["multi palabra", 13]
    ].map((t, i) => ({ name: `countChars #${i + 1}`, run: () => countChars(t[0]), expect: t[1] })),

    ...[
        ["Test", { upper: "TEST", lower: "test" }], ["hola", { upper: "HOLA", lower: "hola" }],
        ["JAVASCRIPT", { upper: "JAVASCRIPT", lower: "javascript" }], ["123", { upper: "123", lower: "123" }],
        ["áéí", { upper: "ÁÉÍ", lower: "áéí" }], ["MiXeD", { upper: "MIXED", lower: "mixed" }],
        [" ", { upper: " ", lower: " " }], ["A", { upper: "A", lower: "a" }], ["z", { upper: "Z", lower: "z" }], ["ñÑ", { upper: "ÑÑ", lower: "ññ" }]
    ].map((t, i) => ({ name: `formatText #${i + 1}`, run: () => formatText(t[0]), expect: t[1] })),

    ...[
        ["JavaScript", "J"], ["hola", "h"], ["123", "1"], ["", ""], ["!", "!"],
        ["abc", "a"], ["ñandú", "ñ"], ["Mixto", "M"], [" test", " "], ["Zorro", "Z"]
    ].map((t, i) => ({ name: `firstChar #${i + 1}`, run: () => firstChar(t[0]), expect: t[1] })),

    ...[
        ["JavaScript", "t"], ["hola", "a"], ["123", "3"], ["", ""], ["!", "!"],
        ["abc", "c"], ["ñandú", "ú"], ["Mixto", "o"], [" test", "t"], ["Zorro", "o"]
    ].map((t, i) => ({ name: `lastChar #${i + 1}`, run: () => lastChar(t[0]), expect: t[1] })),

    ...[
        ["Juan", "Pérez", "Pérez, Juan"], ["Ana", "López", "López, Ana"],
        ["", "Smith", "Smith, "], ["Pedro", "", " , Pedro"], ["A", "B", "B, A"],
        ["María", "del Mar", "del Mar, María"], ["Andrés", "Gómez", "Gómez, Andrés"],
        ["J", "K", "K, J"], ["Ana", "ana", "ana, Ana"], ["Ñoño", "Pérez", "Pérez, Ñoño"]
    ].map((t, i) => ({ name: `formatName #${i + 1}`, run: () => formatName(t[0], t[1]), expect: t[2] })),

    ...[
        [17, "Cannot drive"], [18, "Can drive"], [16, "Cannot drive"],
        [0, "Cannot drive"], [25, "Can drive"],
        [99, "Can drive"], [-1, "Cannot drive"], [50, "Can drive"],
        [10, "Cannot drive"], [19, "Can drive"]
    ].map((t, i) => ({ name: `canDrive #${i + 1}`, run: () => canDrive(t[0]), expect: t[1] })),

    ...[
        [200, 180], [100, 100], [99, 99], [150, 135], [0, 0],
        [101, 90.9], [50, 50], [1000, 900], [110, 99], [10, 10]
    ].map((t, i) => ({ name: `applyDiscount #${i + 1}`, run: () => applyDiscount(t[0]), expect: t[1] })),

    ...[
        [25, true], [10, true], [50, true], [9, false], [51, false],
        [30, true], [0, false], [100, false], [49, true], [11, true]
    ].map((t, i) => ({ name: `isInRange #${i + 1}`, run: () => isInRange(t[0]), expect: t[1] })),

    ...[
        ["admin", "1234", true], ["Admin", "1234", false], ["admin", "0000", false],
        ["user", "1234", false], ["", "", false],
        ["admin", "", false], ["", "1234", false], ["ADMIN", "1234", false],
        ["admin", "12345", false], ["root", "1234", false]
    ].map((t, i) => ({ name: `validateLogin #${i + 1}`, run: () => validateLogin(t[0], t[1]), expect: t[2] })),

    ...[
        [42, "number"], ["hola", "string"], [true, "boolean"], [{}, "object"], [[], "object"],
        [null, "object"], [undefined, "undefined"], [() => { }, "function"], [NaN, "number"], [BigInt(1), "bigint"]
    ].map((t, i) => ({ name: `showType #${i + 1}`, run: () => showType(t[0]), expect: t[1] })),

    ...[
        [[1, 2, 3], 1], [["a", "b"], "a"], [[true, false], true], [[], undefined], [[0], 0],
        [[null, 5], null], [[10, 20, 30], 10], [[99], 99], [[1, 2, 3, 4], 1], [[NaN, 2], NaN]
    ].map((t, i) => ({ name: `BONUS firstElement #${i + 1}`, run: () => firstElement(t[0]), expect: t[1] })),

    ...[
        [[1, 2, 3], 3], [["a", "b"], "b"], [[true, false], false], [[], undefined], [[0], 0],
        [[null, 5], 5], [[10, 20, 30], 30], [[99], 99], [[1, 2, 3, 4], 4], [[NaN, 2], 2]
    ].map((t, i) => ({ name: `BONUS lastElement #${i + 1}`, run: () => lastElement(t[0]), expect: t[1] })),

    ...[
        [[5, 10, 15], 0, 2, 20], [[1, 2, 3], 1, 2, 5], [[10, 20, 30], 0, 1, 30],
        [[100], 0, 0, 200], [[-5, 5], 0, 1, 0],
        [[2, 4, 6], 1, 2, 10], [[9, 9, 9], 0, 2, 18], [[0, 0, 0], 1, 2, 0],
        [[3, 7, 10], 1, 2, 17], [[1, 100], 0, 1, 101]
    ].map((t, i) => ({ name: `BONUS sumArrayElements #${i + 1}`, run: () => sumArrayElements(t[0], t[1], t[2]), expect: t[3] })),

    ...[
        ["Ana", 30, "Doctor", { name: "Ana", age: 30, profession: "Doctor" }],
        ["Juan", 20, "Student", { name: "Juan", age: 20, profession: "Student" }],
        ["Pedro", 40, "Chef", { name: "Pedro", age: 40, profession: "Chef" }],
        ["María", 25, "Engineer", { name: "María", age: 25, profession: "Engineer" }],
        ["", 0, "", { name: "", age: 0, profession: "" }],
        ["A", 1, "B", { name: "A", age: 1, profession: "B" }],
        ["Ana", 99, "Physician", { name: "Ana", age: 99, profession: "Physician" }],
        ["X", 50, "Z", { name: "X", age: 50, profession: "Z" }],
        ["Bob", 18, "Student", { name: "Bob", age: 18, profession: "Student" }],
        ["Eva", 33, "Artist", { name: "Eva", age: 33, profession: "Artist" }]
    ].map((t, i) => ({ name: `BONUS createPerson #${i + 1}`, run: () => createPerson(t[0], t[1], t[2]), expect: t[3] })),

    ...[
        [{ x: 5, y: 10 }, "y", 10], [{ a: 1, b: 2 }, "a", 1], [{ k: "v" }, "k", "v"],
        [{}, "nada", undefined], [{ x: 0 }, "x", 0],
        [{ z: null }, "z", null], [{ n: NaN }, "n", NaN], [{ t: true }, "t", true],
        [{ obj: { a: 1 } }, "obj", { a: 1 }], [{ arr: [1, 2] }, "arr", [1, 2]]
    ].map((t, i) => ({ name: `BONUS getProperty #${i + 1}`, run: () => getProperty(t[0], t[1]), expect: t[2] }))

];

function deepEqual(a, b) {
    try {
        return JSON.stringify(a) === JSON.stringify(b);
    } catch (e) {
        return a === b;
    }
}

function formatValue(v) {
    if (typeof v === "string") return `"${v}"`;
    try { return JSON.stringify(v); } catch { return String(v); }
}

function runAll() {
    const container = document.getElementById("exercises");
    container.innerHTML = "";

    const groups = {};
    tests.forEach(t => {
        const idx = t.name.indexOf(" #");
        const key = idx > -1 ? t.name.slice(0, idx) : t.name;
        if (!groups[key]) groups[key] = [];
        groups[key].push(t);
    });

    let passed = 0, failed = 0;

    Object.keys(groups).forEach(exName => {
        const group = groups[exName];

        const exEl = document.createElement('div');
        exEl.className = 'exercise';

        const header = document.createElement('button');
        header.className = 'exercise-header';
        header.type = 'button';
        header.setAttribute('aria-expanded', 'false');
        header.innerHTML = `<span class="ex-title">${exName}</span><span class="ex-counts">✅ <span class="ex-passed">0</span> ❌ <span class="ex-failed">0</span></span>`;

        const body = document.createElement('div');
        body.className = 'exercise-body';
        body.hidden = true;

        const left = document.createElement('div');
        left.className = 'subsection correct';
        left.innerHTML = '<h4>Correct</h4>';
        const ulCorrect = document.createElement('ul');
        ulCorrect.className = 'list correct-list';
        left.appendChild(ulCorrect);

        const right = document.createElement('div');
        right.className = 'subsection fail';
        right.innerHTML = '<h4>Failed</h4>';
        const ulFail = document.createElement('ul');
        ulFail.className = 'list fail-list';
        right.appendChild(ulFail);

        body.appendChild(left);
        body.appendChild(right);

        exEl.appendChild(header);
        exEl.appendChild(body);

        container.appendChild(exEl);

        let exPassed = 0, exFailed = 0;

        group.forEach(t => {
            let received;
            let ok = false;
            try {
                received = t.run();
                ok = deepEqual(received, t.expect);
            } catch (err) {
                received = `Error: ${err.message || err}`;
                ok = false;
            }

            const li = document.createElement('li');
            li.className = ok ? 'pass' : 'fail';
            li.innerHTML = `<div class="row-label">${t.name}</div>
            <div class="small">Expected: <span class="expected">${formatValue(t.expect)}</span></div>
            <div class="small">Received: <span class="received">${formatValue(received)}</span></div>`;

            if (ok) {
                ulCorrect.appendChild(li);
                exPassed++; passed++;
            } else {
                ulFail.appendChild(li);
                exFailed++; failed++;
            }
        });

        header.querySelector('.ex-passed').textContent = exPassed;
        header.querySelector('.ex-failed').textContent = exFailed;

        header.addEventListener('click', () => {
            const expanded = header.getAttribute('aria-expanded') === 'true';
            header.setAttribute('aria-expanded', expanded ? 'false' : 'true');
            body.hidden = expanded ? true : false;
        });
    });

    document.getElementById("passed").textContent = passed;
    document.getElementById("failed").textContent = failed;
    document.getElementById("total").textContent = tests.length;
}

function runTest(id) {
    let chosen = [];
    if (typeof id === 'number') {
        const idx = id - 1;
        if (idx >= 0 && idx < tests.length) chosen = [tests[idx]];
        else return [];
    } else if (typeof id === 'string') {
        const exact = tests.find(t => t.name === id);
        if (exact) chosen = [exact];
        else {
            chosen = tests.filter(t => t.name.startsWith(id + ' #') || t.name === id);
        }
    } else {
        return [];
    }

    const results = chosen.map(t => {
        try {
            const received = t.run();
            const ok = deepEqual(received, t.expect);
            return { name: t.name, ok, received, expect: t.expect };
        } catch (err) {
            return { name: t.name, ok: false, received: `Error: ${err.message || err}`, expect: t.expect };
        }
    });

    return results;
}

runAll();

document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', () => {
        const exercises = Array.from(document.querySelectorAll('#exercises .exercise')).map(ex => {
            const name = ex.querySelector('.ex-title')?.innerText || '';
            const passed = Number(ex.querySelector('.ex-passed')?.textContent || 0);
            const failed = Number(ex.querySelector('.ex-failed')?.textContent || 0);
            const correct = Array.from(ex.querySelectorAll('.correct-list li')).map(li => ({
                test: li.querySelector('.row-label')?.innerText?.trim() || '',
                expected: li.querySelector('.expected')?.innerText?.trim() || '',
                received: li.querySelector('.received')?.innerText?.trim() || ''
            }));
            const failedList = Array.from(ex.querySelectorAll('.fail-list li')).map(li => ({
                test: li.querySelector('.row-label')?.innerText?.trim() || '',
                expected: li.querySelector('.expected')?.innerText?.trim() || '',
                received: li.querySelector('.received')?.innerText?.trim() || ''
            }));
            return { name, passed, failed, correct, failed: failedList };
        });

        navigator.clipboard?.writeText(JSON.stringify(exercises, null, 2)).then(() => {
            alert('Results copied to clipboard (JSON).');
        }).catch(() => alert('Could not copy to clipboard.'));
    });
});