// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "대윤아!!" },
  { "number": 2, "message": "내가 이걸 다 만들었다고하면 믿을거니?" },
  { "number": 3, "message": "카드부터 이 멘트까지 말이야!!" },
  { "number": 4, "message": "흥, 당연히 못믿겠지" },
  { "number": 5, "message": "그치만 내가 만든 게 맞는걸" },
  { "number": 6, "message": "이건 지나간 날짜의 카드만 볼 수 있는거야" },
  { "number": 7, "message": "오늘이 13일이라면 13까지의 카드만 볼 수 있는거지" },
  { "number": 8, "message": "14일이 되면 14카드도 볼 수 있구!!!" },
  { "number": 9, "message": "이걸 왜 만들었냐고?" },
  { "number": 10, "message": "그거야 난 너무 심심했거든.." },
  { "number": 11, "message": "나 홀로 인턴넷으로 코딩을 배우면서 이것도 만들어보았어." },
  { "number": 12, "message": "사실 오늘 시작해서 이게 첫 작품이야. 헷^^" },
  { "number": 13, "message": "크리스마스 전까지 하루에 하나씩 열어보도록 해" },
  { "number": 14, "message": "우리 크리스마스 이브에 모하지??? 근데 뭐 지금 얘기해봤자 정하지도 못할 것 같아 우리 성격엔 ㅎ" },
  { "number": 15, "message": "으악!! 크리스마스가 10일 남아써!!!" },
  { "number": 16, "message": "크리스마스 선물 받고 싶은 거 있니? 그치만 대답해도 어차피 선물은 나인걸 ㅎㅎ" },
  { "number": 17, "message": "17일.. 무슨 날인지 알아? 바로 9개월 전에 너가 나한테 고백했었잖아. 3월 17일!" },
  { "number": 18, "message": "대윤아 앞으로도 계속 오추곡 많이 해주구, 피아노도 많이 들려죠 ㅎ" },
  { "number": 19, "message": "으악 멘트 고갈이야.. 뇸뇸.. 오늘은 그냥 대충 넘어가야징~" },
  { "number": 20, "message": "너에게 미션을 줄게. 너에게 2023년은 어떤 해였어? 답변 나한테 해줘야해!!" },
  { "number": 21, "message": "꺅 1221이야! 날짜 예쁜 것 같아. 2023 12 21" },
  { "number": 22, "message": "오늘의 재영이와 대윤이는 뭘 하고 있으려나.." },
  { "number": 23, "message": "내일 나 만나서 신났겠네! 나도 벌써 신났어! 이쯤되면 우리 내일 뭐할지 계획 짰겠지? 난 우릴 믿어." },
  { "number": 24, "message": "크리스마스 이브! 오늘 재밌게 나랑 놀아. 사랑해!!!" }
];

