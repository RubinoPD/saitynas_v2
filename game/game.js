document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('passwordInput');
    const rulesList = document.getElementById('rulesList');
    const status = document.getElementById('status');

    passwordInput.value = "";
  
    const rules = [
      {
        rule: 'length',
        description: 'Password must be at least 5 characters long.',
        check: (password) => password.length >= 5,
      },
      {
        rule: 'uppercase',
        description: 'Password must include an uppercase letter.',
        check: (password) => /[A-Z]/.test(password),
      },
      {
        rule: 'number',
        description: 'Password must include a number.',
        check: (password) => /\d/.test(password),
      },
      {
        rule: 'special',
        description: 'Password must include a special character.',
        check: (password) => /[!@#$%]/.test(password),
      },
      {
        rule: 'month',
        description: 'Password must include a month of the year.',
        check: (password) => {
            const months = [
                'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
            ];
            return months.some((month) => password.toLowerCase().includes(month))}
        },
        {
            rule: 'roman-numeral',
            description: 'Password must include a Roman numeral.',
            check: (password) => /I|V|X|L|C|D|M/.test(password),
        },
        {
            rule: 'egg',
            description: '🥚 This is my chicken Paul. He hasn’t hatched yet. Please put him in your password and keep him safe.',
            check: (password) => password.includes('🥚'),
        },
        {
            rule: 'fire',
            description: 'Oh no! Your password with the egg is on fire 🔥. Quick, put it out and save the chicken! ... oh and your password of course!',
            check: (password) => password.includes('🚰💦'),
        },
    ];

    let currentRuleIndex = 0;

    // Show the first rule
    const showNextRule = () => {
        if (currentRuleIndex < rules.length) {
            const {rule, description} = rules[currentRuleIndex];
            const listItem = document.createElement('li');
            listItem.textContent = description;
            listItem.setAttribute('data-rule', rule);
            listItem.classList.add('invalid')
            rulesList.appendChild(listItem);
        }
    };

    // Initialize the first rule
    showNextRule();
    

    // Validate password input
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value;
      let allValid = true;
  
      // Check all rules up to the current one
      for (let i = 0; i <= currentRuleIndex; i++) {
        const {rule, check} = rules[i];
        const ruleElement = document.querySelector(`[data-rule="${rule}"]`);

        if (check(password)) {
            ruleElement.classList.add('valid');
            ruleElement.classList.remove('invalid');
        } else {
            ruleElement.classList.add('invalid');
            ruleElement.classList.remove('valid');
            allValid = false;
        }
      }

      if (allValid && currentRuleIndex < rules.length - 1) {
        // If all rules up to the current one are satisfied, move to the next rule
        currentRuleIndex++;
        showNextRule();
        status.textContent = '🎉 Progressing to the next rule!';
      } else if (allValid && currentRuleIndex === rules.length - 1){
        status.textContent = 'Hoorah! 🎉 You saved your egg.. I mean password and all rules are satisfied! Your password, just like you, is complete and perfect. ❤️';
      } else {
        status.textContent = '⛔ Fix the issues with your password!';
      }


    });
  });
  