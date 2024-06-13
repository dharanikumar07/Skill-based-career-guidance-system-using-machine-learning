# Core Pkg
import streamlit as st 
import streamlit.components.v1 as stc 
import csv

# Load EDA
import pandas as pd 
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity,linear_kernel

#course_title
# Load Our Dataset
def load_data(data):
	df = pd.read_csv(data)
	return df 


# Fxn
# Vectorize + Cosine Similarity Matrix

def vectorize_text_to_cosine_mat(data):
	count_vect = CountVectorizer()
	cv_mat = count_vect.fit_transform(data)
	# Get the cosine
	cosine_sim_mat = cosine_similarity(cv_mat)
	return cosine_sim_mat



# Recommendation Sys
@st.cache_resource
def get_recommendation(title,cosine_sim_mat,df,num_of_rec=10):
	# indices of the course
	course_indices = pd.Series(df.index,index=df['job_title']).drop_duplicates()
	# Index of course
	idx = course_indices[title]

	# Look into the cosine matr for that index
	sim_scores =list(enumerate(cosine_sim_mat[idx]))
	sim_scores = sorted(sim_scores,key=lambda x: x[1],reverse=True)
	selected_course_indices = [i[0] for i in sim_scores[1:]]
	selected_course_scores = [i[0] for i in sim_scores[1:]]

	# Get the dataframe & title
	result_df = df.iloc[selected_course_indices]
	result_df['similarity_score'] = selected_course_scores
	final_recommended_courses = result_df[['job_title','similarity_score','skill_1','skill_2','skill_3','skill_4','skill_5','skill_6','skill_7','skill_8','skill_9','skill_10']]
	return final_recommended_courses.head(num_of_rec)


result_temp = """
<div style="width:90%;height:100%;margin:1px;padding:5px;position:relative;border-radius:5px;border-bottom-right-radius: 60px;
box-shadow:0 0 15px 5px #ccc; background-color: azure;
  border-left: 5px solid #6c6c6c;">
<h4>{}</h4>
<p style="color:blue;"><span style="color:black;">🎯Skill-1:</span>{}</p>
<p style="color:blue;"><span style="color:black;">🎯Skill-2:</span>{}</p>
<p style="color:blue;"><span style="color:black;">🎯Skill-3:</span>{}</p>
<p style="color:blue;"><span style="color:black;">🎯Skill-4:</span>{}</p>
<p style="color:blue;"><span style="color:black;">🎯Skill-5:</span>{}</p>
<p style="color:blue;"><span style="color:black;">🎯Skill-6:</span>{}</p>
<p style="color:blue;"><span style="color:black;">🎯Skill-7:</span>{}</p>
<p style="color:blue;"><span style="color:black;">🎯Skill-8:</span>{}</p>
<p style="color:blue;"><span style="color:black;">🎯Skill-9:</span>{}</p>
<p style="color:blue;"><span style="color:black;">🎯Skill-10:</span>{}</p>
</div>
"""

# Search For Course 
@st.cache_resource
def search_term_if_not_found(term,df):
	result_df = df[df['job_title'].str.contains(term)]
	return result_df


def main():

	st.title("Skill Recommendation System")

	menu = ["Home","Recommend","About"]
	choice = st.sidebar.selectbox("Menu",menu)

	df = load_data("j.csv")

	if choice == "Home":
		st.subheader("Home")
		st.dataframe(df.head(10))


	elif choice == "Recommend":
		st.subheader("Recommend skill")
		cosine_sim_mat = vectorize_text_to_cosine_mat(df['job_title'])
		search_term = st.text_input("Search")
		num_of_rec = st.sidebar.number_input("Number",4,15,4)
		if st.button("Recommend"):
			if search_term is not None:
				try:
					with st.beta_expander("Results as JSON"):
						results_json = results.to_dict('index')
						st.write(results_json)
				except:
					#results= "Not Found"
					#st.warning(results)
					csv_file=csv.reader (open('j.csv', 'r'))
					for row in csv_file:
						if search_term ==row[1]:
							rec_skill1 = row[1]
							rec_skill2 = row[2]
							rec_skill3 = row[3]
							rec_skill4 = row[5]
							rec_skill5 =row[4]
							rec_skill6 =row[6]
							rec_skill7 =row[7]
							rec_skill8 =row[8]
							rec_skill9 =row[9]
							rec_skill10 =row[10]
							stc.html(result_temp.format(search_term,rec_skill1,rec_skill2,rec_skill3,rec_skill4,rec_skill5,rec_skill6,rec_skill7,rec_skill8,rec_skill9,rec_skill10),height=550)
					st.info("Suggested Options include")
					try:
						results = get_recommendation(search_term,cosine_sim_mat,df,num_of_rec)
						for row in results.iterrows():
							rec_title = row[1][0]
							rec_skill1 = row[1][1]
							rec_skill2 = row[1][2]
							rec_skill3 = row[1][3]
							rec_skill4 = row[1][5]
							rec_skill5 = row[1][4]
							rec_skill6 =row[1][6]
							rec_skill7 =row[1][7]
							rec_skill8 =row[1][8]
							rec_skill9 =row[1][9]
							rec_skill10 =row[1][10]
							stc.html(result_temp.format(rec_title,rec_skill1,rec_skill2,rec_skill3,rec_skill4,rec_skill5,rec_skill6,rec_skill7,rec_skill8,rec_skill9,rec_skill10),height=550)
					except:
						st.warning("No Suggest Result")
	else:
		st.subheader("About")
		st.text("Built with Streamlit & Pandas")


if __name__ == '__main__':
	main()


