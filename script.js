/* Local static demo interactions. No data is sent, stored, exported, or analysed. */
document.querySelectorAll('.faq-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.toggle('open');
    const icon = button.querySelector('b');
    if (icon) icon.textContent = isOpen ? '−' : '+';
    let answer = item.querySelector('p');
    if (isOpen && !answer) {
      answer = document.createElement('p');
      const answers = {
        'Do we need to replace our current tools?': 'No. ClaimFlow is presented as a companion to your project system and commercial process.',
        'What types of subcontractors is this for?': 'The concept is designed for specialty contractors with change-order, notice and evidence workflows.',
        'Can it check our specific contract?': 'A production product would require authorized contract access and human review. This local page does not analyze documents.'
      };
      answer.textContent = answers[button.querySelector('span')?.textContent] || '';
      item.append(answer);
    }
    if (answer) answer.hidden = !isOpen;
  });
});

document.querySelectorAll('button:not(.faq-item button)').forEach((button) => {
  button.addEventListener('click', () => {
    const previous = button.dataset.notice;
    if (previous) return;
    button.dataset.notice = 'shown';
    const notice = document.createElement('span');
    notice.className = 'local-demo-notice';
    notice.textContent = 'Local demo only — no export, AI analysis, upload, or submission occurs.';
    button.insertAdjacentElement('afterend', notice);
  });
});
