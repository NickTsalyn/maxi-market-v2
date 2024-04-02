import { ProductCard, ProductCardFilter } from "@/types/interfaces";
import { NavBar } from "@/types/types";

export const NAVBARS: NavBar[] = [
	{
		heading: "Інфомація",
		links: [
			{
				title: "Про нас",
				href: "/",
			},
			{
				title: "Контакти",
				href: "/",
			},
			{
				title: "Зв`язатися з нами",
				href: "/",
			},
		],
	},
	{
		heading: "Навігація",
		links: [
			{
				title: "Категорії товарів",
				href: "/",
			},
			{
				title: "Акційні товари",
				href: "/",
			},
			{
				title: "Купувати та продавати",
				href: "/",
			},
		],
	},
	{
		heading: "Обліковий запис",
		links: [
			{
				title: "Особистий кабінет",
				href: "/",
			},
			{
				title: "Історія покупок",
				href: "/",
			},
			{
				title: "Мої оголошення",
				href: "/",
			},
		],
	},
];

export const MOCK_CATEGORIES = [
	{
		categoryName: "Техніка та електроніка",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/0767/4497/8e65bf95bc80ab74f668fb9471057297?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fIgcg-A0MRn5aagdEVv56~~YmpBoT~24BNJVP0mtp9LI56UuDKweDDQ4StMxiCjXlMY7h4P9Bb5PlsgXwAcG0DketF3BOpPQ8-G1v3mYNSNZEZ6dAfPdQTH~GPuWezTtn18DuNqgwd8CtSD7iScQskzs9dcUqTTVUR~nxx1iMj4Me~QpTE-hXFKwzmtH-OOqYbNqcsEMPEnecF93E-SwbUiYTLJcl8jFv-JT02bIt2JJ8A2FNEBJzTI4CX2aITZ7veWQ2YNnuIEDngMNAfQtzWsV96mJMbZG2AOU~XkVKrHr4dEab~elOLUOkGSwhzERf-ZRDQG37SYj1hlQfXWYVA__",
	},
	{
		categoryName: "Одяг та взуття",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/431b/dcd2/2b4b1283a695e4b45ef10b711603aea8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4KeaTNJ2zmsHdjrUn32GwJK0lEWLOm~6kHolfPpvedoxUeIUCLHSiBG2itsRAR~IFJVb397kEd5yNXDmiFVj2cj3v9o3fDGWNIzaf0M1YGukRxx9vgXBf1mYzdojMNKq40Tqq7HDaG8M1YvPyjoQkOxO4rfbFRKmybOYFDUUItryu1U4i99ze81aCfPPFZLD1MJQ6gWDz9V4GCCP41x1u5vpfBEnH9Le2grga4D-09vShYQicpv9RnoL~7Wg7vk4YfGmptLm-eVWx~abc58XuVitiE6gQJ22UKv9d-vYKIkRdXdPErWSRTdHQG-lyOLtiwXtWIeqzMFFEYRVRFb~w__",
	},
	{
		categoryName: "Відпочинок та спорт",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/b8ab/47f6/02bf1c9fd2563d728565cee760b18a7e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=POtNDuhWOrxFBCv-MDa1B2toEEj2NHTMI0I1u4s8A2qldDp96xAUZTI75ti3vEbYpBj4g3kAE7JI9I4bHTM8PcciQ2P-BN2hNG-etwRoCG2Ia2nxrCGtnZVDvYxFzj1T3lQsUlGD4A080Vpf9cpk3ck2Nwqx9OVcur4it8F9Wq32cqFA6ofzYWdcnndVGVWC0Ptb2sFIgpIXhVRwI-xpjsz7ikGNQS~btiLKl8jWGboCSU-uKwhwGff6FBnl6qhx-HjRnEHQkT-n5IiqbysQnonSZeS5FWm1IOnWhuqgkGX3WgKeoHxsP31qR90Raj7gHkbumkp9m0BjmcRPR0kdsQ__",
	},
	{
		categoryName: "Дитячі товари",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/0c4f/e21f/9c353f181a7912eecf5c8a00eb645c2d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jcpvjiut6k0v3zGVIW7afiFJIpqJ8ydRFpd-9wUEsf7naiGUYg0EY0452ZidpqZUmm~-ygyowt-iCx4jviXW-Ofh6PBm~Ce-qJIXv6TK5RDDiRhDeLFnNxygpbeARs1Rf25BVO8aqcSRI8P7Vj722sHgYfMGTq-XV1Ojdh4HuSmGWK4J1l2aw1ELOh6Az-KkuLH8kSnJ2AaQ72WNRyFvCgIba7CqzebDizTUbpinrylEldRDeHYsQY~dsEBjZce5xMBKweNcTajEf2BO2LK~Bh5p~bcBGvkNnS5UJsnx-6bZAPdAQKeCYsP0kBCbIyOU0HTexVSRNQHzvBiNAoU3qA__",
	},
	{
		categoryName: "Краса та здоров’я",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/e1a8/fcbd/10fc20fbb823378a29f32d74f2f98535?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cF-99Ng7Vzu5AfMxz94OHIAoeD5AtK1aGAVGnhGwFwFgieOalUeeNl22vtnSsP4PecPuKrqqK3rQX9CPp8wAl~H7KcXdg6lMPF4dX-~g~20ir0z6pj8ttZuTATluM6ae1A6wGBRgTmhP9hWNO8rrdfdk6FWwJCbB4itfAAjsOVTBNn-M9E8nxXo3i07c2-wUSWtGM6RQnicpyVW8QLQ9lFzBQ1G~V8hB9vRdKvq269jIMjptUXkgiP19P1HgB70xdS~gXJPDKtQHAYg8o1hKTsfP1q0jXrClvWxy15lNM4mqV5ikR5qtRxmvN28tvlDVdlS56cnQ~YPiImEhXvmenQ__",
	},
	{
		categoryName: "Подарунки, хоббі",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/5426/bd95/cb8a03ba7c0f7b87d12ea1a9741d2202?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VnWx465XFqdnyFaTlkCuWkL6b4PEw-4XuS4RUTR49yHTih45ow2dINPkt2qyCFSV687AhjqvKLTPYeDTPBt5wO~vFZ9XTQllNqvjltvLuvuzeaWJaagkCEQ57qa0XnQZMsFOJ4Og9IjzAlRsHFKunXrG5CnkOw-Sw3WhKCGIzu9NsdflgK-3ZOVtMx2u3N9KylPAQmFrnyue22lf~86pLLZLyOtOEi9OuWop0K5B6jjzGsum1xvBX-QKNZUraanp3v6DKI7YzTcU-sIEdkrpAxTO4nC44e9CSKxzs3EaVkdg7-9S~3HnxwqaEjZHG1WvhDIYPKuZpoI9nd5orEVRJg__",
	},
	{
		categoryName: "Книги",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/eb8d/a2ae/4279ff6a7c371c233cbffe7cda6b9959?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WUco9-ZIPqpxzpqrFTxwSwq9nmZwA7rSQVQg1uZYEGWiULVuWB1HKaoT~egNy6UMKDaJVke~-YNkV~DSYaCMV~dMpA1U7VmR6EHJFnP8JFG~x4IYKL6OBUlRRqd599gHCff0CfE3rEKhPGdTmqjBt5BNbTDLBNnWd6RE~j84kk37Jf1oyvMTiK7Q7s31r2H--TsO6QpMtWjxzl89Ft0vxzHUvLogOoVHiqR2HKJzcwcyEoBB6lD5LuVTYngPvZm2r627Rbhd3iMZ42ZDxlIy9Q24zNHkOGXSMnpC-z1JyiZidavZ4CkKNVpHF2VmRY83rCqR~hjh~S7JM98hl87~Xg__",
	},
	{
		categoryName: "Домашні тварини та зоотовари",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/9b5d/05a9/96e0037e655092d5f21ad175183bdd60?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KkjSBIXp6Udjz2mlrwg65d4gatSlVdr75xULxKR~K60DO1kfLqBY5zsYB1OV55nfu8PNSbhWuU33ZWRkNFP7QqzlPk~VlngsSEDhUXFLhkM-tRUmHff843m54iQvWJu3XI2QaX8XcUAngRqK2bHtFlLN9LEw0B6Q6MMEFAuZExpnwB8G0j2CIXKKuPcf4PKQi-iidlCW9yYFjoH8~-WEZcQTHl-bywlgM~dRu5Cq1V-bee8wZpw7JwZ1fErZELmxbV8WsYHkdVg8jtznKIPPYouLTcUNTYjf8Jw6gwjyHCzWHZxktGwkc2l3~3Dau~twjrS1UeCb-k1zLIgzEd1CeQ__",
	},
];

export const MOCK_PRODUCT_CARDS: ProductCard[] = [
	{
		description: 'Рюкзак "Експлорер" - ідеальний спутник для активного стилю життя та пригод...',
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/0983/46c1/a67a87db93547c545a31c27af7770df0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z2QZpp6ZCPeq4joz-XQPGhxZqoW1XcRjIkVTQufcRkIVdYLbPLGfC5nTs1grwxQUQFnBo1jtbbGX5Mk3xJPipvfGdLumXssZ8mgFZ2JPLKXRlS~jqniAJ7hPJT3rc2Vs~Wpzs5vnUydsbjryUugPRd7-M7zi4ntjTGwvHK6scwejPXdvFGoASbuGHlIdzctaEx6g54w5iurnxBTAS-b18CnzyYYk3sC8kBr3vJtb9yPhuxCYjbX3L5NGHPDAD0bOOa96~fqmUlwe1~L6WVylO-F-NxzIoD8XzNKcH-vf70yY33DlcO41~nqG9wREUkSQgnaP1jrhArWyw2p6z4R2-g__",
		name: 'Рюкзак "Експлорер"',
		price: "1500",
	},
	{
		description: "Кросівки Nike, дитячі, чорні, 30 розмір, 19,5 см, б/в",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/685f/ffe2/095e66cd9a48308a1be5326ac26fddc1?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EgdyI4XEc8o2UgOAaXIhJhC7gl-hoUQRWYx~w1u0oIywgBuUB8ZHvcNb4CkqegXg1KUSZ95ekcbwCpU-su7EstfrOI9Vf0E9GnaKoMlaoLTUz1QLwAKG0ry6o5Ob67-OUPDbLQxw2RtpRxu544yYrOWpnboAlW0B2-9W9d1NPp0TD8ZT3PxkyHPvNR47-8ez8pu04dd02iKpVMGFw3IGjNf8V6Hy8zk5JGPKJh6LQdCGckX9T2RrQhkwVbnL0O1KyeZc6TVpBLNNudBW2tGVfINAmw8CWvxsjQyjtpcFcxUGF9TrqjekCg8hXGGtqDGcgisRudTD2rZdHB2HEVLMsw__",
		name: "Кросівки дитячі",
		price: "650",
	},
	{
		description: "Tлектричний чайник SMEG 1,7 л б/в. Стан нового",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/2c1e/f4d9/9f6c5ded7802aed0ac69ac29ffe4737f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LAEd8vqse8nV6oW5qbuU5dr0wMlK4HjAQPDushWKIZdCQiPJvEx-u9V76d~si6UVVW~moWEDTDoc9LCXr5Bor3-xls87yhHe2uWGObks-b4T4rdtHYs-i5YnlFc-AMO35plW8ymunWJF5fjtqE6WNWTtrsQO41Iy1AIZyz9xyGd8MKPNlWm6yNkte4EqpCnHq-29A8qVMlBVyiPVm2Pt~JE7PAXJan1T~2lS00MIW0aW1Eq1gQcYfY~BLbmwBwCqbjXVevxIQ7Zz3IHYiiv2G9jroQDEvRhTvAqG8Se8Hoj8T29U0jZVE8jxWyhysV4MVvGXjvTDJKsK27xIfHjwdw__",
		name: "Чайник електричний",
		price: "3500",
	},
	{
		description: 'Рюкзак "Експлорер" - ідеальний спутник для активного стилю життя та пригод...',
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/d103/8433/47d540b2488a500957ce88b0bd2be0e5?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a7kaJ25fmsI8oM96NWLU60Uj9ExcSHZRDt2Vdh5JXXykMayx4K7NIDHMcBFxUrXLUblkradH7h5ZQVh9U9i9BE~9Mmh7DtsdlGi3R5UyLa9lB6KWlDgX9dTrA3h~RsY3GKrtJg9ek-iqGgDI5ELchJvsa-zVy8uZNrf3GvFuxxCtD5imwF2PCi7AvsT3vmBFWRpMdzqetC7~MGdjeZr7hWMaDjtZwsbFmLXkYopKb57In8Y~~tsOfhMa19FsZlje3GxQVr3kTpg2i0TIqwp3Nw79hynosDG8lmWcpLNLUV2Ls9Rv~s~EaRSEA7j21sOXFi7C5bbZ9bR9eyWzemFUdA__",
		name: "Гітара класична, нова",
		price: "3080",
	},
	{
		description: "Відкладаєте важливі й дрібні справи на завтра, на потім, на останній тиждень перед дедлайном? ",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/4b11/e6f6/510b8160d6ade88653847bdf95866384?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=haaXkMpl7cqF6hDEE0Uzegfxoe5DAIioakazvyWSoRbVO3Kb6xVbQMrln2jX6H4-93U4bHY0gu0ea5WB8GZNnaxJWdm2ATYxqVkGyhaQ6PrOEnfbZ1Jw-QAItLmUTZ5NoqM1qCe~feeRfQoyi7rZLuYsH2veoFyOgJbwWBhICz-PCM8hC1J0BssiktASMZN0Dy4KqAgF5JGYJvt~A4aOK-1cmh6Sg9XC8~8j-DR4hshXp1ky0hLqw01ddopQ6BX4TkvIY3wiu55JZM3mKaD90gbsiHkspYFCtvvMsqaeri1AkeJJ9Qzi7TW0QD22LFNax3k2vprCA41pbuUTtpyWew__",
		name: "Книга “Прокрастинація”",
		price: "100",
	},
	{
		description: "Електронний конструктор Znatok Перші кроки в електроніці (набір В) - прекрасний подарунок.",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/1ed6/4162/1c3722d48ef86086e38432999cb3f645?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kj8mvXf~xz-fH1gXYDwhDQySpTxqQyLga2T6Fb7qfHmZ7k8oVsFRIWjuEf7mByBoChESh2G~9FcjlPYlKc0G8EOWE0ZDEsxwgENdV9tWUoZq8E4fSiTCWAIr3y1YEeXSTemEoyXPkPgghDMUif71591pLfBUo4wgVDwO6obBoCM5Ni0bftIJLI9zZs1GNHYwwShEtV0o3TMHluIyDn~Sd-tgqS0I8wTy6pZaTrX5Nm-dthkVaPNLcm9b04VVMFIq1uFQJrVGZ2Yf2lxalOtJcCrwieoFWVUm3ib-dpgcZgLBoT6zZd~HX5NR9N~nHYz2FRbQ8y67pNYsAMZCIuCzPQ__",
		name: "Електронний конструктор",
		price: "499",
	},
	{
		description: "Кабель USB Samsung Galaxy Tab P1000 P3100 P3110 P5100 P5110 N8000 P7500 Original коробка",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/ce0a/62a0/36b1cb8274403ec923eb7f56253c5c14?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SvwOcC2Em-CWc~81gdYowjT-kMIn1FYlVpyexjwuugjwBq16D2iyxk2tc1w44NtAsD2sL~AvjzFrAmSzK8WQRvJJNdoQnFBQmpSW~1qtdfPJbsUHad3GsSLc4DxM-JnIZpX2UzQrWjD~3ZTZKfKVlvKgEswW4WA6NuhOWYtgVn4Jo1NS7sjrwpLy5EWt3qkH8xFm0klOJkbbFhxst~DVhLkNz~NVAGVzDlnxLHPt4PTSA2MjZ0z6Oz-SZvEpklG~Fk0hIGLjVf-0EGiMWkg3lJKLXV0tWzF9PK0rCL0BWTOPC1ExVAdP95gu4Q6IPstCmn54dH0wkrXo0rxkZlbehQ__",
		name: "Кабель Universal для Samsung",
		price: "99",
	},
	{
		description: "Набір гантелі 2шт вагою по 16кг ідеально підходить для тих, хто прагне зміцнити своє тіло.",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/e975/6b30/ec8c58d5f42844a883359fbcb99afcbc?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hc5DQTQhRy8xYwBdKkjiuzf7QWZosbAb8MJoFPy~ChhSDNy-gRUpyufzLadRrqfEyhlPy1vgjMEVAsNTt-Id1sxMO~MnYRLDLzhjXhZWsa9EaHWwG-jFa5ySnQrqryC5JonFMCx~TNY074VpF8kNBMp30z1vX0ieff9baXuvDsgmYNWWA0sCOA6mut3Bl7dNpjAxafaTteh2lHr2ZIQ~~gGVpqp6cNR844O5a8IQ6d8qA74DZiovymH~dZ7eWCyaVhv1VQXVpHQdAMZcHgWishtN9345~xrXdyldxOvFffdt3D86iqhadJM2ZtMLpHw2jr~fAXqWjy~LvgZabt4pRw__",
		name: "Комплект гантелей, 2шт",
		price: "800",
	},
];

export const MOCK_FILTER_CARDS: ProductCardFilter[] = [
	{
		description: 'Рюкзак "Експлорер" - ідеальний спутник для активного стилю життя та пригод...',
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/c39c/7c31/87b50b71c55180159dc24b015b4db612?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FgnOjhR~mNhLgdmeCQJB2VSJr1TZjwOsr5qKl0evCe4O~takG-ZsNd-CE4J6-JQEL3flqk6~owhZfC1YCY1QGO1F4-vvklDSRLlOGSew7Zfk-6u2aCxkaoW4lG99PBr9nrNhZLAs3Y1D5L4llR7tU5YB8KrCdxV4eAhybMct4~NDkFCBhJpiq2-P72wpQPCzxMCGY6xVoAPF6lkVmYE5iW191lHNllC2CR9ZB~-j2dZ~aEnX6uee2VQ-q1jv~plZS~uhD1ggRiqA5DhXepVRNBfrqPB1i5DB-w15tPZYD6grKcxDtSML-dvqtcbebSGw2fb4Fq6UoSoFQGDYWUkPZA__",
		name: 'Рюкзак "Експлорер"',
		price: "1500",
	},
	{
		description: "Набір гантелі 2шт вагою по 16кг ідеально підходить для тих, хто прагне зміцнити своє тіло.",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/f0f1/6f9b/e14591728e01e84ae266b5941cf6f1e3?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UsiXuhYik2zTeR8TEa6WKKXuUZdCX1cF-A8djGxGAIMkk0Lzvb3-~be2AX67zKGEi73GKO2Dqxfs5mBkVLVZuO7Q5JjsJ92lU7WzioVYii1Uv0cievOp--CzI48HXvDu0AHEnYetvoSMIjOUMypNWFVZ1uJRsVtkxnPfELT7Eu3VqvuZZjwNt5IF1clTxC7JxNiuH~MhjzhUJx9x55vo3ee~b0Qv22tJljfFnmByzJsl92~S9qXvmYSZ3pgQn6OPtYEBfC3Orsn6rSXnO9drcsZmzpsWp8Oa7qDTJMfIYcocwl7Of7gD3ZxrjSJ1axFWYfkHiVYtcD5Rcay42H-GKw__",
		name: "Комплект гантелей,  2шт",
		price: "800",
	},
	{
		description:
			"Бігова доріжка Torneo Inita T-150 відноситься до класу суперкомпактних бігових доріжок, яка в складеному ...",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/8ca4/9868/ea7821e459c5d8035e8d514e0e16d4f8?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=llZQFDgTd8d2TsSCXvt6rtM65yxnHvzIdB5Lw386Q1Sd5E2J2iIsmQWjtWs~p0LiM~2BTJEDV9C0M7iHq3pfPBsF7XpE3lrE-Kzrm8aG9xNfrW8zGiiiZ5D-K0KpIovajuGdaXkaBGuJF49L-9P5mBVlbS1OBdfa5V3D88oyASX-M307XEK~y5phYv3qexcXC12ioJqbdUVc~KOpnrUGyyqkw4Zz7~YP6MsPGqN02afSJQ9JjZGtR2U25e9wsHqzQdnP9z3FtQ3aiEg82xcbl55KFn7~QLWGuyMQHGluv1JoylzZ6rI0CV5vZG21W7LtnbXIZ12KHhX1q96U1Gelgw__",
		name: "Бігова доріжк а Torneo Inita T-150  ",
		price: "10500",
	},
	{
		description: "Огляд Велосипед CrossBike 26`` Spark D-Steel 2023 Рама 13`` neon yellow. Технічні параметри:",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/d112/27a9/b239c874db0523a73ca65303f55a3d61?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NAYfgAEy8eLSaR2YoQD4A7wSc9KFUm2vQpgo1MSXCpizo84-DLFNAoPJ0UtnIBQZSuYZLTw2n0H8R1ydzYkc5nWQCIj8feeA5VeA5U2z0gNdFI3cBVtMYwi5vXsbG4GguzYiAhvEBG6CE0GGcP48Z8ckT0boSS~YaEeW-RpE-y5O2THWlNsht2pV75sMXoiDlQwpIen1YmNFMFo13CcO~Dh6XnU4J1GK7UDKKhYYv0WAxmO3RI8p2lSthE3ZOWXCyBAlxsHPqR4zmQ-5KMqmENDFkRP5AZINTwY46t6z0yKwftzl5rtKh3ZQPP5VVO7eU3zMxxSfC0nD42tICsWcng__",
		name: "Велосипед CrossBike 26",
		price: "15500",
	},
	{
		description: "Naturehike P-Series 2 виконано в ультралегкому стилі. Для цього виробник використовує одні з ...",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/9b5a/9da7/84a641b2102ea2a631969ac80ebaa156?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VukFWwij2CpQgOH~ajpdwjsMIK76tIh6b~ENxUq0nK5iHFTMWODHec4PlC5k6Yycss7~BcgyNAcT8jTk59PBwgb6bimnTSIvfh1l~JkSsiUtTOblKTj-QaXSvVRs2EP4T8H1LhCZsk~D7-d6NvG~fli0kdLfRN~L2ScanpibSoKOTmpP5awlvupwxSoKraSqFnayyP1NU280WeFuhVkpXUIH1qIGbLsbomyWmen~ZeBlcKD-yZGEBaoQBXifoKk7OL7nkmJQsIPV~poNJlh0lrH8e254ybPX76VAnrCqCkC00vnfXJF8dwk-8diAKLV-alFr85fnR9x0Kt~PXBX-4w__",
		name: "Палатка  Naturehike P-Series 2",
		price: "3490",
	},
	{
		description: "Ліхтар виконаний у міцному пластиковому корпусі типу АВС. 1 яскравий діод LED із дальністю ",
		imgUrl:
			"https://s3-alpha-sig.figma.com/img/01dd/1b9e/e21b4ec1d583fc3d1e97cf50a5cc72c2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INsYZkajj3cB5sO8E~UsRK~xcVge6-lm4cmPBSLEeFLKLU1REqYSBF-D5-kbdzY6j9u7kncw3rPqQgdolFwYSmOdmzPumWHLX4U4-f~0akEuy7j7ViKwaZMxpPV~a8x-eRgMYBIQGY6fPBrGG21GIgJ4dBbxYgF1ANWDbgNWNREAdfelhDbuZDYyMkys8sckWgTPAaqPmBHxcndixlwyGytCoPyoP53aJ5yfvinm4ak8D0e68CUr07VSSQqinTbLK2xnM1FO-7aIaHWNZXPit0tWms9EYDGKGzq0q8Ye00l2UgppkA~bbM3evyMIsfr2E0tKKpp6cuRGW45L0EqCTg__",
		name: "Акумуляторний ліхтар ",
		price: "180",
	}
];
