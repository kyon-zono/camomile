# camomile

# ライバー募集 白色に。(改善案)
# boxのcontent部分をh3に変更できないか

# font-family
* 太字対応 【】
* スマホ対応 【】

# box内上部のPCサイズの余白を作る用css
* box-top-margin
.box-top-margin {
    margin: 20px auto;
}

# フォントチェックコード
<h3 class="centering my-5">CAMOMILE.INC</h3>
font-weight: bold; /* フォント太字 */

# ライバー募集改善案の仮コード
<!-- 改善案 -->
      <div id="add-liver" class="d-flex">
        <div class="add-test">
          <div class="mx-3 align-center my-auto">
            <p>登録はこちらから<span class="fas fa-arrow-circle-right"></span></p>
          </div>
          <div class="mx-3 sns-icon">
            <a href="https://lin.ee/BvedKbA">
              <img src="images/LINE_APP.png" alt="友だち追加">
            </a>
          </div>
        </div>
      </div>
<!-- css -->
  #add-liver {
    background-color: #fff;
    padding: 10px;
    border: 2px solid #000;
    border-radious: 4px;
  }
<!-- ここまで -->

# コード逃し場所
.faq-box::before {
  /* ポジション */
  position: absolute;
  top: -40px;
  left: 0;
  right: 0;
  margin: auto;
  /* 見出し(フォント関連) */
  font-family: 'arial Black', 'arial', 'Avenir', sans-serif; /* フォント指定 */
  font-weight: bold;
  font-size: 45px;
  max-width: 90%; 
  color: #fff;
  background-color: #000;
  text-align: center;
  padding: 5px 0; 
  border-radius: 50px;
}

