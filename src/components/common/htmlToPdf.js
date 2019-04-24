//导出页面为PDF
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default{
	install (Vue,options){
		Vue.prototype.getPDf=function(){
			var title=this.htmlTitle;
			html2Canvas(document.querySelector('#pdfDom'),{
				allowTaint:true
			}).then(function(canvas){
				let contentWidth=canvas.width;
				let contentHeight=canvas.height;
				console.log('height:'+contentHeight);
				console.log('width:'+contentWidth);
				let pageHeight=contentWidth/592.28*841.89;
				console.log('pageHeight:'+pageHeight);
				let leftHeight=contentHeight;
				console.log('leftHeight:'+leftHeight);
				let position1=20;
			    let imgWidth=502.28;
				let imgHeight=502.28/contentWidth*contentHeight;
				console.log('imgHeight:'+imgHeight);
				let pageData=canvas.toDataURL('image/jpeg',1.0);
				let PDF=new JsPDF('','pt','a4');
				if(leftHeight<pageHeight){
					PDF.addImage(pageData,'JPEF',0,position1,imgWidth,imgHeight)
				}else{
					while(leftHeight>0){
						PDF.addImage(pageData,'JPEG',45,position1,imgWidth,imgHeight-40)
						leftHeight-=pageHeight;
						position1-=851.89;
						if(leftHeight>-10){
							PDF.addPage();
						}
					}
				}
				PDF.save(title+'.pdf');
			})
		}
	}
}















































































































































































































