Table _tableView SelectIndex 1 %thinktime=3000
TLChoiceButton "The Morgue" Tap %thinktime=3000
Image * Verify icn_check_correct %thinktime=2000
Button Trivia Tap 52 24 %thinktime=2000
Table _tableView SelectIndex 2 %thinktime=2000
TLChoiceButton Unisphere Tap %thinktime=2000
Image * Verify icn_x_wrong %thinktime=2000
Button Trivia Tap 48 32 %thinktime=2000
Table _tableView SelectIndex 3 %thinktime=2000
TLChoiceButton "A Morgue" Tap %thinktime=2000
Image * Verify icn_x_wrong %thinktime=2000
Button Trivia Tap 22 31 %thinktime=2000
Table _tableView SelectIndex 4 %thinktime=2000
TLChoiceButton "A Disney Character" Tap %thinktime=2000
Image * Verify icn_x_wrong %thinktime=2000
Button Trivia Tap 36 26 %thinktime=2000
Table _tableView SelectIndex 5 %thinktime=2000
TLChoiceButton "Science Factual" Tap %thinktime=2000
Script login.mt RunWith logins.csv
Image * Verify icn_check_correct %thinktime=2000
Button Trivia Tap 52 22 %thinktime=2000