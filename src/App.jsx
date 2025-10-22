import { useState, useEffect } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
    min-height: 100vh;
    background: #ffffff;
    color: #1a1a1a;
    font-family: "Pretendard Variable", Pretendard, -apple-system,
        BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
        "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif;
    padding: 60px 20px;

    @media (max-width: 768px) {
        padding: 40px 16px;
    }
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`;

const MainContainer = styled.div`
    position: relative;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    @media (max-width: 768px) {
        padding: 0 16px;
        min-height: 100vh;
        height: auto;
    }
`;

const Header = styled.header`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
    max-width: 100%;
    padding: 0 20px;

    @media (max-width: 768px) {
        padding: 0 16px;
    }
`;

const Logo = styled.img`
    width: 120px;
    height: 120px;

    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
        margin-bottom: 12px;
    }
`;

const Title = styled.h1`
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #000000;
    letter-spacing: -1.5px;

    @media (max-width: 1024px) {
        font-size: 40px;
    }

    @media (max-width: 768px) {
        font-size: 32px;
        letter-spacing: -1px;
    }

    @media (max-width: 480px) {
        font-size: 28px;
    }
`;

const Subtitle = styled.p`
    font-size: 24px;
    color: #6b6b6b;
    font-weight: 400;

    @media (max-width: 1024px) {
        font-size: 20px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const DdayContainer = styled.div`
    text-align: center;
    width: 100%;
    padding: 0 20px;

    @media (max-width: 768px) {
        padding: 0 16px;
    }
`;

const DdayText = styled.div`
    font-size: 200px;
    font-weight: 700;
    margin-bottom: 40px;
    color: #000000;
    letter-spacing: -4px;

    @media (max-width: 1024px) {
        font-size: 96px;
        letter-spacing: -3px;
        margin-bottom: 32px;
    }

    @media (max-width: 768px) {
        font-size: 72px;
        letter-spacing: -2px;
        margin-bottom: 24px;
    }

    @media (max-width: 480px) {
        font-size: 56px;
        margin-bottom: 20px;
    }
`;

const TimeLeftText = styled.div`
    font-size: 72px;
    font-weight: 600;
    color: #393939;
    letter-spacing: -3px;

    @media (max-width: 1024px) {
        font-size: 72px;
        letter-spacing: -2px;
    }

    @media (max-width: 768px) {
        font-size: 48px;
        letter-spacing: -1.5px;
    }

    @media (max-width: 480px) {
        font-size: 36px;
        letter-spacing: -1px;
    }
`;

const CurrentScheduleText = styled.h2`
    margin: 32px 0;
    font-size: 62px;
    font-weight: 600;
    color: #000000;

    @media (max-width: 1024px) {
        font-size: 40px;
        margin-top: 28px;
    }

    @media (max-width: 768px) {
        font-size: 32px;
        margin-top: 24px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
        margin-top: 20px;
    }
`;

const ScheduleSection = styled.div`
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 60px 40px;
    width: 100%;

    @media (max-width: 1024px) {
        padding: 50px 30px;
    }

    @media (max-width: 768px) {
        padding: 40px 20px;
        border-radius: 0;
        border-left: none;
        border-right: none;
    }

    @media (max-width: 480px) {
        padding: 30px 16px;
    }
`;

const ScheduleTitle = styled.h2`
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 60px;
    text-align: center;
    color: #000000;

    @media (max-width: 1024px) {
        font-size: 36px;
        margin-bottom: 50px;
    }

    @media (max-width: 768px) {
        font-size: 28px;
        margin-bottom: 40px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
        margin-bottom: 30px;
    }
`;

const DaySchedule = styled.div`
    margin-bottom: 60px;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        margin-bottom: 40px;
    }
`;

const DayHeader = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e5e5e5;
    color: #000000;
    display: flex;
    align-items: center;
    gap: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 20px;
        padding-bottom: 12px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        letter-spacing: 0.3px;
    }
`;

const ScheduleGrid = styled.div`
    display: grid;
    gap: 1px;
    background: #e5e5e5;
    border: 1px solid #e5e5e5;
`;

const ScheduleItem = styled.div`
    background: ${(props) => (props.$isCurrent ? "#191919" : "#ffffff")};
    padding: 24px;
    display: grid;
    grid-template-columns: 140px 1fr 1fr;
    gap: 24px;
    align-items: center;
    transition: all 0.2s ease;

    &:hover {
        background: ${(props) => (props.$isCurrent ? "#191919" : "#fafafa")};
    }

    @media (max-width: 1024px) {
        grid-template-columns: 130px 1fr 1fr;
        gap: 20px;
        padding: 20px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 8px;
        padding: 16px;
    }

    @media (max-width: 480px) {
        padding: 14px;
    }
`;

const TimeText = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => (props.$isCurrent ? "#ffffff" : "#1a1a1a")};
    font-family: "Courier New", monospace;

    @media (max-width: 768px) {
        font-size: 15px;
        margin-bottom: 4px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const ContentText = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: ${(props) => (props.$isCurrent ? "#ffffff" : "#1a1a1a")};

    @media (max-width: 768px) {
        font-size: 15px;
        margin-bottom: 4px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const LocationText = styled.div`
    font-size: 14px;
    color: ${(props) => (props.$isCurrent ? "#cccccc" : "#6b6b6b")};
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 13px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

// 해커톤 시작 시간: 2025년 10월 24일 (금) 17:10
// 해커톤 종료 시간: 2025년 10월 26일 (일) 21:00
const hackathonStart = new Date("2025-10-24T17:10:00");
const hackathonEnd = new Date("2025-10-26T21:00:00");

// 테스트 모드: true로 설정하면 현재 시간 기준으로 테스트 가능
const TEST_MODE = true; //매우중요
const testStartTime = new Date(); // 해커톤 시  작 시간 설정
const testEndTime = new Date(); // 해커톤 종료 시간 설정
// setDate의 값을 조정해서 다른 날짜 테스트:
// -1: 어제 시작 (2일차 확인용)
// -2: 그제 시작 (3일차 확인용)
//  0: 오늘 시작 (1일차 확인용)
testStartTime.setDate(testStartTime.getDate() - 0);
testStartTime.setHours(17, 10, 0, 0);
testEndTime.setDate(testEndTime.getDate() + 2); // 시작일로부터 2일 후
testEndTime.setHours(21, 0, 0, 0);

const schedule = [
    {
        day: 1,
        date: "10월 24일 (금)",
        emoji: "01",
        items: [
            {
                time: "17:10-18:00",
                content: "개회식 및 오리엔테이션",
                location: "시청각실",
            },
            {
                time: "18:00-18:30",
                content: "아이스브레이킹",
                location: "시청각실",
            },
            {
                time: "18:30-19:30",
                content: "저녁식사",
                location: "구내식당",
            },
            {
                time: "19:30-22:30",
                content: "1일차 저녁 해커톤",
                location: "사물인터넷서비스실습실, 세미나실 등 지정 장소",
            },
            {
                time: "22:30-23:00",
                content: "청소 및 점등 시간",
                location: "이후 기숙사 입소",
            },
        ],
    },
    {
        day: 2,
        date: "10월 25일 (토)",
        emoji: "02",
        items: [
            {
                time: "09:00-09:15",
                content: "2일차 오리엔테이션 및 멘토소개",
                location: "시청각실",
            },
            {
                time: "09:15-12:00",
                content: "2일차 오전 해커톤",
                location: "사물인터넷서비스실습실, 세미나실 등 지정 장소",
            },
            {
                time: "12:00-13:00",
                content: "점심식사",
                location: "구내식당",
            },
            {
                time: "13:00-18:00",
                content: "2일차 오후 해커톤",
                location: "사물인터넷서비스실습실, 세미나실 등 지정 장소",
            },
            {
                time: "18:00-19:00",
                content: "저녁식사",
                location: "구내식당",
            },
            {
                time: "19:00-21:00",
                content: "2일차 저녁 해커톤 1부",
                location: "사물인터넷서비스실습실, 세미나실 등 지정 장소",
            },
            {
                time: "21:00-21:30",
                content: "간식",
                location: "지정장소 취식",
            },
            {
                time: "21:30-22:30",
                content: "2일차 저녁 해커톤 2부",
                location: "사물인터넷서비스실습실, 세미나실 등 지정 장소",
            },
            {
                time: "22:30-23:00",
                content: "청소 및 점등 시간",
                location: "이후 기숙사 입소",
            },
        ],
    },
    {
        day: 3,
        date: "10월 26일 (일)",
        emoji: "03",
        items: [
            {
                time: "09:00-12:00",
                content: "3일차 오전 해커톤",
                location: "사물인터넷서비스실습실, 세미나실 등 지정 장소",
            },
            {
                time: "12:00-13:00",
                content: "점심식사",
                location: "구내식당",
            },
            {
                time: "13:00-17:30",
                content: "3일차 오후 해커톤, 결과물 제출",
                location: "사물인터넷서비스실습실, 세미나실 등 지정 장소",
            },
            {
                time: "17:30-18:00",
                content: "청소 및 점등 시간",
                location: "",
            },
            {
                time: "18:00-19:00",
                content: "저녁식사",
                location: "구내식당",
            },
            {
                time: "19:00-21:00",
                content: "결과물 발표",
                location: "시청각실",
            },
            {
                time: "21:00~",
                content: "이후 청소 및 점등, 폐회",
                location: "",
            },
        ],
    },
];

function App() {
    const [timeLeft, setTimeLeft] = useState("");
    const [currentSchedule, setCurrentSchedule] = useState(null);
    const [dday, setDday] = useState(0);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const startTime = TEST_MODE ? testStartTime : hackathonStart;
            const endTime = TEST_MODE ? testEndTime : hackathonEnd;
            const diff = startTime - now;

            // D-day 계산
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            setDday(days);

            if (diff > 0) {
                // 해커톤 시작 전
                const hours = Math.floor(
                    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (diff % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                if (days > 0) {
                    setTimeLeft(
                        `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`
                    );
                } else {
                    setTimeLeft(`${hours}시간 ${minutes}분 ${seconds}초 남음`);
                }
                setCurrentSchedule(null);
            } else if (now < endTime) {
                // 해커톤 진행 중
                // 현재 진행 중인 일정 찾기
                let found = false;

                for (const day of schedule) {
                    for (const item of day.items) {
                        const timeRange = item.time.split("-");
                        if (timeRange.length === 2) {
                            const [itemStartTime, itemEndTime] = timeRange;

                            // 날짜 계산
                            const dayOffset = day.day - 1;
                            const itemStartDate = new Date(startTime);
                            itemStartDate.setDate(
                                itemStartDate.getDate() + dayOffset
                            );

                            // 시작 시간 파싱
                            const [startHour, startMinute] = itemStartTime
                                .split(":")
                                .map(Number);
                            itemStartDate.setHours(startHour, startMinute, 0);

                            // 종료 시간 파싱
                            const itemEndDate = new Date(itemStartDate);
                            const [endHour, endMinute] = itemEndTime
                                .split(":")
                                .map(Number);
                            itemEndDate.setHours(endHour, endMinute, 0);

                            if (now >= itemStartDate && now <= itemEndDate) {
                                setCurrentSchedule({
                                    ...item,
                                    day: day.day,
                                    date: day.date,
                                });
                                found = true;
                                break;
                            }
                        }
                    }
                    if (found) break;
                }

                if (!found) {
                    setCurrentSchedule(null);
                }

                // 해커톤 종료까지의 남은 시간 계산
                const endDiff = endTime - now;
                const endDays = Math.floor(endDiff / (1000 * 60 * 60 * 24));
                const endHours = Math.floor(
                    (endDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const endMinutes = Math.floor(
                    (endDiff % (1000 * 60 * 60)) / (1000 * 60)
                );
                const endSeconds = Math.floor((endDiff % (1000 * 60)) / 1000);

                if (endDays > 0) {
                    setTimeLeft(
                        `종료까지 ${endDays}일 ${endHours}시간 ${endMinutes}분 ${endSeconds}초`
                    );
                } else {
                    setTimeLeft(
                        `종료까지 ${endHours}시간 ${endMinutes}분 ${endSeconds}초`
                    );
                }
            } else {
                // 해커톤 종료
                setTimeLeft("해커톤이 종료되었습니다");
                setCurrentSchedule(null);
            }
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    // 현재 진행 중인 일정인지 확인하는 함수
    const isCurrentItem = (day, item) => {
        return (
            currentSchedule &&
            currentSchedule.day === day &&
            currentSchedule.time === item.time &&
            currentSchedule.content === item.content
        );
    };

    return (
        <AppContainer>
            <Container>
                <MainContainer>
                    <Header>
                        <Logo
                            src="/logo.png"
                            alt="2025 디미고 창업동아리  연합 스타트업톤 로고"
                        />
                        <Title>2025 디미고 창업동아리 연합 스타트업톤</Title>
                        <Subtitle>10월 24일 (금) ~ 26일 (일)</Subtitle>
                    </Header>

                    <DdayContainer>
                        <DdayText>
                            {dday > 0
                                ? `D-${dday}`
                                : dday === 0
                                ? "D-DAY"
                                : `D+${Math.abs(dday)}`}
                        </DdayText>
                        {currentSchedule && (
                            <CurrentScheduleText>
                                {currentSchedule.content}
                            </CurrentScheduleText>
                        )}
                        <TimeLeftText>{timeLeft}</TimeLeftText>
                    </DdayContainer>
                </MainContainer>

                <ScheduleSection>
                    <ScheduleTitle>전체 일정</ScheduleTitle>
                    {schedule.map((day) => (
                        <DaySchedule key={day.day}>
                            <DayHeader>
                                <span>{day.date}</span>
                            </DayHeader>
                            <ScheduleGrid>
                                {day.items.map((item, index) => (
                                    <ScheduleItem
                                        key={index}
                                        $isCurrent={isCurrentItem(
                                            day.day,
                                            item
                                        )}
                                    >
                                        <TimeText
                                            $isCurrent={isCurrentItem(
                                                day.day,
                                                item
                                            )}
                                        >
                                            {item.time}
                                        </TimeText>
                                        <ContentText
                                            $isCurrent={isCurrentItem(
                                                day.day,
                                                item
                                            )}
                                        >
                                            {item.content}
                                        </ContentText>
                                        <LocationText
                                            $isCurrent={isCurrentItem(
                                                day.day,
                                                item
                                            )}
                                        >
                                            {item.location &&
                                                `${item.location}`}
                                        </LocationText>
                                    </ScheduleItem>
                                ))}
                            </ScheduleGrid>
                        </DaySchedule>
                    ))}
                </ScheduleSection>
            </Container>
        </AppContainer>
    );
}

export default App;
