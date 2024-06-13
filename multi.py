import streamlit as st

from streamlit_option_menu import option_menu

from module_4 import app1
from module_2 import cc
from module_3 import ats
st.set_page_config(
        page_title="Pondering",
)



class MultiApp:

    def __init__(self):
        self.apps = []

    def add_app(self, title, function):

        self.apps.append({
            "title": title,
            "function": function
        })

    def run():
        with st.sidebar:        
            app = option_menu(
                menu_title='Recommendation & Analyser',
                options=['Skills','Course','ATS'],
                icons=['lightbulb-fill','grid-1x2-fill','bar-chart-fill'],
                menu_icon='gear-wide-connected',
                default_index=0,
                styles={
                    "container": {"padding": "5!important","background-color":'black'},
        "icon": {"color": "white", "font-size": "23px"}, 
        "nav-link": {"color":"white","font-size": "20px", "text-align": "left", "margin":"0px", "--hover-color": "blue"},
        "nav-link-selected": {"background-color": "#02ab21"},}
                
                )

        
        if app == "Skills":
            app1.main()
        if app == "Course":
            cc.main()
        if app == "ATS":
            ats.main()
    run()