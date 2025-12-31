import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_community.document_loaders import PyPDFLoader
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings

app = Flask(__name__)
CORS(app)

# هذه هي الأسماء الصحيحة لملفاتك التي ظهرت في الصورة
FILES = ["14-.pdf", "Surveying_Engin.pdf"]

print("جاري تحليل المراجع المساحية للدكتور جمعة داود...")
all_pages = []

for file in FILES:
    if os.path.exists(file):
        loader = PyPDFLoader(file)
        all_pages.extend(loader.load_and_split())
        print(f"تمت قراءة المرجع بنجاح: {file}")
    else:
        print(f"تنبيه: الملف {file} غير موجود في المجلد الحالي!")

# بناء محرك البحث الذكي (RAG)
# 
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vector_db = FAISS.from_documents(all_pages, embeddings)
print("نظام SHB AI جاهز الآن لاستقبال أسئلتكم!")

@app.route('/ask', methods=['POST'])
def ask():
    user_query = request.json.get('query')
    # البحث عن المعلومات الأكثر صلة داخل الكتب
    docs = vector_db.similarity_search(user_query, k=2)
    answer = "\n".join([doc.page_content for doc in docs])
    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(port=5000)