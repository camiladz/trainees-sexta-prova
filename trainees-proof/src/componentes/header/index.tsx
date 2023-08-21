import { useMinicart } from '../../hooks/useMinicart'
import { HorizontalMenu } from './menu'
import './styles.css'

export const Header = () => {
    const { openMinicart } = useMinicart()

    return <>
        <div className="headerContent">
            <div className="logo">
                <svg className="storeLogo" width="218" height="32" viewBox="0 0 218 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M144.852 21.3115C146.036 21.3115 146.998 21.1808 147.737 20.9193C149.139 20.4181 149.84 19.4866 149.84 18.1246C149.84 17.3292 149.492 16.7137 148.797 16.2778C148.101 15.8529 147.009 15.477 145.52 15.1502L142.977 14.5781C140.478 14.0116 138.75 13.396 137.793 12.7314C136.174 11.62 135.365 9.88219 135.365 7.51788C135.365 5.36057 136.147 3.56827 137.712 2.14096C139.277 0.713653 141.575 0 144.607 0C147.139 0 149.297 0.675519 151.079 2.02656C152.872 3.3667 153.812 5.31699 153.899 7.87743H149.074C148.987 6.42833 148.357 5.39871 147.183 4.78856C146.4 4.38543 145.428 4.18386 144.265 4.18386C142.972 4.18386 141.939 4.44535 141.168 4.96834C140.396 5.49132 140.01 6.22131 140.01 7.15833C140.01 8.01907 140.391 8.6619 141.152 9.08682C141.641 9.37011 142.684 9.70242 144.281 10.0838L148.422 11.0807C150.237 11.5165 151.606 12.0994 152.53 12.8294C153.964 13.9625 154.681 15.6023 154.681 17.7487C154.681 19.9496 153.839 21.78 152.155 23.24C150.481 24.6891 148.112 25.4137 145.047 25.4137C141.918 25.4137 139.456 24.7 137.663 23.2727C135.87 21.8345 134.973 19.8624 134.973 17.3565H139.766C139.918 18.4569 140.217 19.2795 140.662 19.8243C141.478 20.8158 142.874 21.3115 144.852 21.3115Z" fill="#2563EB" />
                    <path d="M166.157 21.475V24.9561L163.957 25.0378C161.762 25.1141 160.262 24.7327 159.458 23.8938C158.936 23.3599 158.675 22.5373 158.675 21.4259V10.4597H156.197V7.14198H158.675V2.17365H163.272V7.14198H166.157V10.4597H163.272V19.8733C163.272 20.6033 163.365 21.0609 163.549 21.2462C163.734 21.4205 164.299 21.5077 165.245 21.5077C165.386 21.5077 165.533 21.5077 165.685 21.5077C165.848 21.4968 166.005 21.4859 166.157 21.475Z" fill="#2563EB" />
                    <path d="M183.958 9.23391C185.458 11.1188 186.208 13.347 186.208 15.9183C186.208 18.5332 185.458 20.7722 183.958 22.6353C182.459 24.4876 180.182 25.4137 177.128 25.4137C174.074 25.4137 171.798 24.4876 170.298 22.6353C168.798 20.7722 168.048 18.5332 168.048 15.9183C168.048 13.347 168.798 11.1188 170.298 9.23391C171.798 7.349 174.074 6.40654 177.128 6.40654C180.182 6.40654 182.459 7.349 183.958 9.23391ZM177.112 10.3453C175.753 10.3453 174.705 10.8301 173.966 11.7998C173.238 12.7586 172.874 14.1314 172.874 15.9183C172.874 17.7051 173.238 19.0834 173.966 20.0531C174.705 21.0228 175.753 21.5077 177.112 21.5077C178.47 21.5077 179.514 21.0228 180.242 20.0531C180.97 19.0834 181.334 17.7051 181.334 15.9183C181.334 14.1314 180.97 12.7586 180.242 11.7998C179.514 10.8301 178.47 10.3453 177.112 10.3453Z" fill="#2563EB" />
                    <path d="M198.483 11.2768C196.613 11.2768 195.358 11.887 194.717 13.1073C194.358 13.7937 194.179 14.8505 194.179 16.2778V24.7926H189.501V6.97855H193.935V10.0838C194.652 8.89615 195.277 8.08444 195.809 7.64862C196.679 6.91862 197.809 6.55363 199.2 6.55363C199.287 6.55363 199.357 6.55907 199.412 6.56997C199.477 6.56997 199.613 6.57542 199.819 6.58631V11.3585C199.526 11.3258 199.265 11.3041 199.037 11.2932C198.809 11.2823 198.624 11.2768 198.483 11.2768Z" fill="#2563EB" />
                    <path d="M217.767 19.5628C217.647 20.6197 217.098 21.6929 216.12 22.7824C214.599 24.5148 212.469 25.381 209.73 25.381C207.47 25.381 205.476 24.651 203.748 23.191C202.02 21.731 201.156 19.3558 201.156 16.0654C201.156 12.982 201.933 10.6176 203.487 8.97242C205.052 7.32721 207.079 6.5046 209.567 6.5046C211.045 6.5046 212.377 6.78243 213.561 7.3381C214.746 7.89377 215.724 8.77085 216.495 9.96936C217.191 11.0262 217.642 12.252 217.848 13.6466C217.968 14.4637 218.017 15.6405 217.995 17.1767H205.834C205.9 18.9636 206.459 20.2165 207.513 20.9356C208.155 21.3824 208.926 21.6057 209.828 21.6057C210.785 21.6057 211.562 21.3333 212.159 20.7886C212.485 20.4944 212.773 20.0858 213.023 19.5628H217.767ZM213.17 14.1042C213.094 12.873 212.719 11.9414 212.045 11.3095C211.382 10.6667 210.556 10.3453 209.567 10.3453C208.491 10.3453 207.655 10.683 207.057 11.3585C206.47 12.034 206.101 12.9493 205.949 14.1042H213.17Z" fill="#2563EB" />
                    <path d="M15.8936 24.2043C14.5678 25.0215 12.9377 25.43 11.0033 25.43C7.81911 25.43 5.21093 24.3242 3.17872 22.1124C1.05957 19.8897 0 16.8499 0 12.9929C0 9.09228 1.07044 5.96528 3.21132 3.61186C5.3522 1.25844 8.18317 0.0817261 11.7042 0.0817261C14.758 0.0817261 17.2086 0.860752 19.056 2.4188C20.9143 3.96596 21.9794 5.89991 22.251 8.22064H17.3118C16.9314 6.57543 16.0023 5.42596 14.5243 4.77223C13.6984 4.41268 12.7801 4.2329 11.7694 4.2329C9.83501 4.2329 8.24294 4.96835 6.99318 6.43923C5.7543 7.89923 5.13486 10.1001 5.13486 13.0419C5.13486 16.0055 5.80864 18.1028 7.1562 19.334C8.50376 20.5652 10.0361 21.1808 11.7531 21.1808C13.4376 21.1808 14.8177 20.696 15.8936 19.7263C16.9695 18.7457 17.6324 17.4655 17.8823 15.8856H12.3237V11.8652H22.3325V24.7927H19.0071L18.5018 21.7855C17.5346 22.9295 16.6652 23.7358 15.8936 24.2043Z" fill="#0F172A" />
                    <path d="M35.6995 11.2768C33.8303 11.2768 32.5751 11.887 31.9339 13.1073C31.5753 13.7937 31.396 14.8505 31.396 16.2778V24.7927H26.7176V6.97856H31.1515V10.0838C31.8687 8.89616 32.4936 8.08445 33.0261 7.64863C33.8955 6.91863 35.0257 6.55364 36.4167 6.55364C36.5037 6.55364 36.5743 6.55908 36.6286 6.56998C36.6938 6.56998 36.8297 6.57543 37.0362 6.58632V11.3585C36.7427 11.3259 36.4819 11.3041 36.2537 11.2932C36.0255 11.2823 35.8407 11.2768 35.6995 11.2768Z" fill="#0F172A" />
                    <path d="M54.5925 9.23392C56.0922 11.1188 56.842 13.347 56.842 15.9183C56.842 18.5332 56.0922 20.7722 54.5925 22.6354C53.0928 24.4876 50.8161 25.4137 47.7623 25.4137C44.7086 25.4137 42.4318 24.4876 40.9321 22.6354C39.4324 20.7722 38.6826 18.5332 38.6826 15.9183C38.6826 13.347 39.4324 11.1188 40.9321 9.23392C42.4318 7.34901 44.7086 6.40655 47.7623 6.40655C50.8161 6.40655 53.0928 7.34901 54.5925 9.23392ZM47.746 10.3453C46.3876 10.3453 45.3389 10.8301 44.5999 11.7998C43.8718 12.7586 43.5077 14.1314 43.5077 15.9183C43.5077 17.7052 43.8718 19.0834 44.5999 20.0531C45.3389 21.0228 46.3876 21.5077 47.746 21.5077C49.1044 21.5077 50.1477 21.0228 50.8758 20.0531C51.6039 19.0834 51.968 17.7052 51.968 15.9183C51.968 14.1314 51.6039 12.7586 50.8758 11.7998C50.1477 10.8301 49.1044 10.3453 47.746 10.3453Z" fill="#0F172A" />
                    <path d="M75.5557 13.3688H70.7958C70.7089 12.7041 70.4861 12.1049 70.1275 11.571C69.6058 10.8519 68.7962 10.4923 67.6986 10.4923C66.1337 10.4923 65.0632 11.2714 64.4873 12.8294C64.183 13.6575 64.0308 14.7579 64.0308 16.1308C64.0308 17.4382 64.183 18.4896 64.4873 19.285C65.0415 20.7668 66.0848 21.5077 67.6171 21.5077C68.7038 21.5077 69.4754 21.2135 69.9318 20.6251C70.3883 20.0368 70.6654 19.2741 70.7632 18.3371H75.5068C75.3982 19.7535 74.8874 21.0936 73.9745 22.3575C72.5183 24.395 70.3611 25.4137 67.503 25.4137C64.6448 25.4137 62.542 24.5639 61.1944 22.8642C59.8469 21.1645 59.1731 18.9581 59.1731 16.2452C59.1731 13.1835 59.9175 10.8029 61.4064 9.10318C62.8952 7.40348 64.9491 6.55364 67.5682 6.55364C69.796 6.55364 71.6163 7.05483 73.0291 8.05721C74.4527 9.0596 75.2949 10.8301 75.5557 13.3688Z" fill="#0F172A" />
                    <path d="M93.976 19.5628C93.8565 20.6197 93.3077 21.6929 92.3296 22.7824C90.8082 24.5148 88.6781 25.381 85.9396 25.381C83.6791 25.381 81.685 24.651 79.957 23.191C78.2291 21.731 77.3652 19.3558 77.3652 16.0654C77.3652 12.982 78.1422 10.6176 79.6962 8.97243C81.2611 7.32722 83.2879 6.50461 85.7765 6.50461C87.2545 6.50461 88.5858 6.78244 89.7703 7.33811C90.9549 7.89378 91.9329 8.77087 92.7045 9.96937C93.4 11.0262 93.851 12.252 94.0575 13.6466C94.1771 14.4637 94.226 15.6405 94.2042 17.1767H82.0436C82.1088 18.9636 82.6685 20.2166 83.7226 20.9357C84.3638 21.3824 85.1354 21.6057 86.0374 21.6057C86.9937 21.6057 87.7707 21.3333 88.3684 20.7886C88.6944 20.4944 88.9824 20.0858 89.2324 19.5628H93.976ZM89.3791 14.1042C89.303 12.873 88.9281 11.9414 88.2543 11.3095C87.5914 10.6667 86.7655 10.3453 85.7765 10.3453C84.7007 10.3453 83.8639 10.683 83.2662 11.3585C82.6793 12.0341 82.3098 12.9493 82.1577 14.1042H89.3791Z" fill="#0F172A" />
                    <path d="M106.283 11.2768C104.414 11.2768 103.159 11.887 102.518 13.1073C102.159 13.7937 101.98 14.8505 101.98 16.2778V24.7927H97.3014V6.97856H101.735V10.0838C102.453 8.89616 103.077 8.08445 103.61 7.64863C104.479 6.91863 105.61 6.55364 107.001 6.55364C107.088 6.55364 107.158 6.55908 107.213 6.56998C107.278 6.56998 107.414 6.57543 107.62 6.58632V11.3585C107.327 11.3259 107.066 11.3041 106.838 11.2932C106.609 11.2823 106.425 11.2768 106.283 11.2768Z" fill="#0F172A" />
                    <path d="M117.58 20.1185L121.248 6.97856H126.187L120.09 24.4985C118.917 27.8761 117.988 29.968 117.303 30.7743C116.618 31.5914 115.249 32 113.195 32C112.782 32 112.451 31.9946 112.201 31.9837C111.951 31.9837 111.576 31.9673 111.076 31.9346V28.2084L111.663 28.2411C112.119 28.2629 112.554 28.2465 112.967 28.192C113.38 28.1376 113.728 28.0123 114.01 27.8161C114.282 27.6309 114.532 27.2441 114.76 26.6558C114.999 26.0674 115.097 25.7079 115.053 25.5771L108.533 6.97856H113.7L117.58 20.1185Z" fill="#0F172A" />
                    <path d="M126.383 19.9224H131.322V24.7927H126.383V19.9224Z" fill="#0F172A" />
                </svg>
            </div>
            <div className="searchbar">
                <svg className="searchbarIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <input type="text" className="searchabrInput" placeholder="Olá! O que você precisa encontrar hoje?" />
            </div>
            <div className="headerRightContent">
                <div className="myAccount">
                    <button className="myAccountButton">
                        <svg className="userLogo" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="myaccountText">Acessar minha conta</span>
                    </button>
                </div>
                <div className="minicartButtonContent">
                    <button className='minicartButton' onClick={openMinicart}>
                        <svg className="minicartIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2H3.30616C3.55218 2 3.67519 2 3.77418 2.04524C3.86142 2.08511 3.93535 2.14922 3.98715 2.22995C4.04593 2.32154 4.06333 2.44332 4.09812 2.68686L4.57143 6M4.57143 6L5.62332 13.7314C5.75681 14.7125 5.82355 15.2031 6.0581 15.5723C6.26478 15.8977 6.56108 16.1564 6.91135 16.3174C7.30886 16.5 7.80394 16.5 8.79411 16.5H17.352C18.2945 16.5 18.7658 16.5 19.151 16.3304C19.4905 16.1809 19.7818 15.9398 19.9923 15.6342C20.2309 15.2876 20.3191 14.8247 20.4955 13.8988L21.8191 6.94969C21.8812 6.62381 21.9122 6.46087 21.8672 6.3335C21.8278 6.22177 21.7499 6.12768 21.6475 6.06802C21.5308 6 21.365 6 21.0332 6H4.57143ZM10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20C17.5523 20 18 20.4477 18 21Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <HorizontalMenu />
    </>
}