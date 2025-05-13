'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  function toggleSublist(evt) {
    const target = evt.target;

    if (target.tagName === 'SPAN') {
      const parenLi = target.parentNode;
      const sublist = parenLi.querySelector('ul');

      if (sublist) {
        sublist.style.display = sublist.style.display === 'none' ? '' : 'none';
      }
    }
  }

  function wrapTextNodes(node) {
    node.childNodes.forEach((child) => {
      if (
        child.nodeType === Node.TEXT_NODE &&
        child.textContent.trim() !== ''
      ) {
        const span = document.createElement('span');

        span.textContent = child.textContent;
        child.replaceWith(span);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        wrapTextNodes(child);
      }
    });
  }

  wrapTextNodes(tree);
  tree.addEventListener('click', toggleSublist);
});
