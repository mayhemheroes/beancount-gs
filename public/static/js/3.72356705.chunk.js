(this["webpackJsonpbeancount-web"]=this["webpackJsonpbeancount-web"]||[]).push([[3],{125:function(n,t,e){n.exports=function(){"use strict";var n=1e3,t=6e4,e=36e5,i="millisecond",r="second",s="minute",o="hour",u="day",c="week",f="month",a="quarter",h="year",d="date",l="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},w=function(n,t,e){var i=String(n);return!i||i.length>=t?n:""+Array(t+1-i.length).join(e)+n},v={s:w,z:function(n){var t=-n.utcOffset(),e=Math.abs(t),i=Math.floor(e/60),r=e%60;return(t<=0?"+":"-")+w(i,2,"0")+":"+w(r,2,"0")},m:function n(t,e){if(t.date()<e.date())return-n(e,t);var i=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(i,f),s=e-r<0,o=t.clone().add(i+(s?-1:1),f);return+(-(i+(e-r)/(s?r-o:o-r))||0)},a:function(n){return n<0?Math.ceil(n)||0:Math.floor(n)},p:function(n){return{M:f,y:h,w:c,d:u,D:d,h:o,m:s,s:r,ms:i,Q:a}[n]||String(n||"").toLowerCase().replace(/s$/,"")},u:function(n){return void 0===n}},N="en",$={};$[N]=m;var M=function(n){return n instanceof D},y=function(n,t,e){var i;if(!n)return N;if("string"==typeof n)$[n]&&(i=n),t&&($[n]=t,i=n);else{var r=n.name;$[r]=n,i=r}return!e&&i&&(N=i),i||!e&&N},b=function(n,t){if(M(n))return n.clone();var e="object"==typeof t?t:{};return e.date=n,e.args=arguments,new D(e)},x=v;x.l=y,x.i=M,x.w=function(n,t){return b(n,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(n){this.$L=y(n.locale,null,!0),this.parse(n)}var w=m.prototype;return w.parse=function(n){this.$d=function(n){var t=n.date,e=n.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(g);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return e?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(n),this.$x=n.x||{},this.init()},w.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},w.$utils=function(){return x},w.isValid=function(){return!(this.$d.toString()===l)},w.isSame=function(n,t){var e=b(n);return this.startOf(t)<=e&&e<=this.endOf(t)},w.isAfter=function(n,t){return b(n)<this.startOf(t)},w.isBefore=function(n,t){return this.endOf(t)<b(n)},w.$g=function(n,t,e){return x.u(n)?this[t]:this.set(e,n)},w.unix=function(){return Math.floor(this.valueOf()/1e3)},w.valueOf=function(){return this.$d.getTime()},w.startOf=function(n,t){var e=this,i=!!x.u(t)||t,a=x.p(n),l=function(n,t){var r=x.w(e.$u?Date.UTC(e.$y,t,n):new Date(e.$y,t,n),e);return i?r:r.endOf(u)},g=function(n,t){return x.w(e.toDate()[n].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),e)},p=this.$W,m=this.$M,w=this.$D,v="set"+(this.$u?"UTC":"");switch(a){case h:return i?l(1,0):l(31,11);case f:return i?l(1,m):l(0,m+1);case c:var N=this.$locale().weekStart||0,$=(p<N?p+7:p)-N;return l(i?w-$:w+(6-$),m);case u:case d:return g(v+"Hours",0);case o:return g(v+"Minutes",1);case s:return g(v+"Seconds",2);case r:return g(v+"Milliseconds",3);default:return this.clone()}},w.endOf=function(n){return this.startOf(n,!1)},w.$set=function(n,t){var e,c=x.p(n),a="set"+(this.$u?"UTC":""),l=(e={},e[u]=a+"Date",e[d]=a+"Date",e[f]=a+"Month",e[h]=a+"FullYear",e[o]=a+"Hours",e[s]=a+"Minutes",e[r]=a+"Seconds",e[i]=a+"Milliseconds",e)[c],g=c===u?this.$D+(t-this.$W):t;if(c===f||c===h){var p=this.clone().set(d,1);p.$d[l](g),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else l&&this.$d[l](g);return this.init(),this},w.set=function(n,t){return this.clone().$set(n,t)},w.get=function(n){return this[x.p(n)]()},w.add=function(i,a){var d,l=this;i=Number(i);var g=x.p(a),p=function(n){var t=b(l);return x.w(t.date(t.date()+Math.round(n*i)),l)};if(g===f)return this.set(f,this.$M+i);if(g===h)return this.set(h,this.$y+i);if(g===u)return p(1);if(g===c)return p(7);var m=(d={},d[s]=t,d[o]=e,d[r]=n,d)[g]||1,w=this.$d.getTime()+i*m;return x.w(w,this)},w.subtract=function(n,t){return this.add(-1*n,t)},w.format=function(n){var t=this,e=this.$locale();if(!this.isValid())return e.invalidDate||l;var i=n||"YYYY-MM-DDTHH:mm:ssZ",r=x.z(this),s=this.$H,o=this.$m,u=this.$M,c=e.weekdays,f=e.months,a=function(n,e,r,s){return n&&(n[e]||n(t,i))||r[e].substr(0,s)},h=function(n){return x.s(s%12||12,n,"0")},d=e.meridiem||function(n,t,e){var i=n<12?"AM":"PM";return e?i.toLowerCase():i},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:x.s(u+1,2,"0"),MMM:a(e.monthsShort,u,f,3),MMMM:a(f,u),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:a(e.weekdaysMin,this.$W,c,2),ddd:a(e.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:x.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,o,!0),A:d(s,o,!1),m:String(o),mm:x.s(o,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:r};return i.replace(p,(function(n,t){return t||g[n]||r.replace(":","")}))},w.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},w.diff=function(i,d,l){var g,p=x.p(d),m=b(i),w=(m.utcOffset()-this.utcOffset())*t,v=this-m,N=x.m(this,m);return N=(g={},g[h]=N/12,g[f]=N,g[a]=N/3,g[c]=(v-w)/6048e5,g[u]=(v-w)/864e5,g[o]=v/e,g[s]=v/t,g[r]=v/n,g)[p]||v,l?N:x.a(N)},w.daysInMonth=function(){return this.endOf(f).$D},w.$locale=function(){return $[this.$L]},w.locale=function(n,t){if(!n)return this.$L;var e=this.clone(),i=y(n,t,!0);return i&&(e.$L=i),e},w.clone=function(){return x.w(this.$d,this)},w.toDate=function(){return new Date(this.valueOf())},w.toJSON=function(){return this.isValid()?this.toISOString():null},w.toISOString=function(){return this.$d.toISOString()},w.toString=function(){return this.$d.toUTCString()},m}(),E=D.prototype;return b.prototype=E,[["$ms",i],["$s",r],["$m",s],["$H",o],["$W",u],["$M",f],["$y",h],["$D",d]].forEach((function(n){E[n[1]]=function(t){return this.$g(t,n[0],n[1])}})),b.extend=function(n,t){return n.$i||(n(t,D,b),n.$i=!0),b},b.locale=y,b.isDayjs=M,b.unix=function(n){return b(1e3*n)},b.en=$[N],b.Ls=$,b.p={},b}()},261:function(n,t,e){var i;!function(r){"use strict";var s,o,u,c=9e15,f=1e9,a="0123456789abcdef",h="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",d="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",l={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-c,maxE:c,crypto:!1},g=!0,p="[DecimalError] ",m=p+"Invalid argument: ",w=p+"Precision limit exceeded",v=p+"crypto unavailable",N="[object Decimal]",$=Math.floor,M=Math.pow,y=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,b=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,x=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,D=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,E=1e7,O=h.length-1,S=d.length-1,_={toStringTag:N};function q(n){var t,e,i,r=n.length-1,s="",o=n[0];if(r>0){for(s+=o,t=1;t<r;t++)(e=7-(i=n[t]+"").length)&&(s+=I(e)),s+=i;(e=7-(i=(o=n[t])+"").length)&&(s+=I(e))}else if(0===o)return"0";for(;o%10===0;)o/=10;return s+o}function A(n,t,e){if(n!==~~n||n<t||n>e)throw Error(m+n)}function T(n,t,e,i){var r,s,o,u;for(s=n[0];s>=10;s/=10)--t;return--t<0?(t+=7,r=0):(r=Math.ceil((t+1)/7),t%=7),s=M(10,7-t),u=n[r]%s|0,null==i?t<3?(0==t?u=u/100|0:1==t&&(u=u/10|0),o=e<4&&99999==u||e>3&&49999==u||5e4==u||0==u):o=(e<4&&u+1==s||e>3&&u+1==s/2)&&(n[r+1]/s/100|0)==M(10,t-2)-1||(u==s/2||0==u)&&0==(n[r+1]/s/100|0):t<4?(0==t?u=u/1e3|0:1==t?u=u/100|0:2==t&&(u=u/10|0),o=(i||e<4)&&9999==u||!i&&e>3&&4999==u):o=((i||e<4)&&u+1==s||!i&&e>3&&u+1==s/2)&&(n[r+1]/s/1e3|0)==M(10,t-3)-1,o}function F(n,t,e){for(var i,r,s=[0],o=0,u=n.length;o<u;){for(r=s.length;r--;)s[r]*=t;for(s[0]+=a.indexOf(n.charAt(o++)),i=0;i<s.length;i++)s[i]>e-1&&(void 0===s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/e|0,s[i]%=e)}return s.reverse()}_.absoluteValue=_.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),H(n)},_.ceil=function(){return H(new this.constructor(this),this.e+1,2)},_.clampedTo=_.clamp=function(n,t){var e=this,i=e.constructor;if(n=new i(n),t=new i(t),!n.s||!t.s)return new i(NaN);if(n.gt(t))throw Error(m+t);return e.cmp(n)<0?n:e.cmp(t)>0?t:new i(e)},_.comparedTo=_.cmp=function(n){var t,e,i,r,s=this,o=s.d,u=(n=new s.constructor(n)).d,c=s.s,f=n.s;if(!o||!u)return c&&f?c!==f?c:o===u?0:!o^c<0?1:-1:NaN;if(!o[0]||!u[0])return o[0]?c:u[0]?-f:0;if(c!==f)return c;if(s.e!==n.e)return s.e>n.e^c<0?1:-1;for(t=0,e=(i=o.length)<(r=u.length)?i:r;t<e;++t)if(o[t]!==u[t])return o[t]>u[t]^c<0?1:-1;return i===r?0:i>r^c<0?1:-1},_.cosine=_.cos=function(){var n,t,e=this,i=e.constructor;return e.d?e.d[0]?(n=i.precision,t=i.rounding,i.precision=n+Math.max(e.e,e.sd())+7,i.rounding=1,e=function(n,t){var e,i,r;if(t.isZero())return t;(i=t.d.length)<32?r=(1/G(4,e=Math.ceil(i/3))).toString():(e=16,r="2.3283064365386962890625e-10");n.precision+=e,t=Q(n,1,t.times(r),new n(1));for(var s=e;s--;){var o=t.times(t);t=o.times(o).minus(o).times(8).plus(1)}return n.precision-=e,t}(i,K(i,e)),i.precision=n,i.rounding=t,H(2==u||3==u?e.neg():e,n,t,!0)):new i(1):new i(NaN)},_.cubeRoot=_.cbrt=function(){var n,t,e,i,r,s,o,u,c,f,a=this,h=a.constructor;if(!a.isFinite()||a.isZero())return new h(a);for(g=!1,(s=a.s*M(a.s*a,1/3))&&Math.abs(s)!=1/0?i=new h(s.toString()):(e=q(a.d),(s=((n=a.e)-e.length+1)%3)&&(e+=1==s||-2==s?"0":"00"),s=M(e,1/3),n=$((n+1)/3)-(n%3==(n<0?-1:2)),(i=new h(e=s==1/0?"5e"+n:(e=s.toExponential()).slice(0,e.indexOf("e")+1)+n)).s=a.s),o=(n=h.precision)+3;;)if(f=(c=(u=i).times(u).times(u)).plus(a),i=Z(f.plus(a).times(u),f.plus(c),o+2,1),q(u.d).slice(0,o)===(e=q(i.d)).slice(0,o)){if("9999"!=(e=e.slice(o-3,o+1))&&(r||"4999"!=e)){+e&&(+e.slice(1)||"5"!=e.charAt(0))||(H(i,n+1,1),t=!i.times(i).times(i).eq(a));break}if(!r&&(H(u,n+1,0),u.times(u).times(u).eq(a))){i=u;break}o+=4,r=1}return g=!0,H(i,n,h.rounding,t)},_.decimalPlaces=_.dp=function(){var n,t=this.d,e=NaN;if(t){if(e=7*((n=t.length-1)-$(this.e/7)),n=t[n])for(;n%10==0;n/=10)e--;e<0&&(e=0)}return e},_.dividedBy=_.div=function(n){return Z(this,new this.constructor(n))},_.dividedToIntegerBy=_.divToInt=function(n){var t=this.constructor;return H(Z(this,new t(n),0,1,1),t.precision,t.rounding)},_.equals=_.eq=function(n){return 0===this.cmp(n)},_.floor=function(){return H(new this.constructor(this),this.e+1,3)},_.greaterThan=_.gt=function(n){return this.cmp(n)>0},_.greaterThanOrEqualTo=_.gte=function(n){var t=this.cmp(n);return 1==t||0===t},_.hyperbolicCosine=_.cosh=function(){var n,t,e,i,r,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;e=o.precision,i=o.rounding,o.precision=e+Math.max(s.e,s.sd())+4,o.rounding=1,(r=s.d.length)<32?t=(1/G(4,n=Math.ceil(r/3))).toString():(n=16,t="2.3283064365386962890625e-10"),s=Q(o,1,s.times(t),new o(1),!0);for(var c,f=n,a=new o(8);f--;)c=s.times(s),s=u.minus(c.times(a.minus(c.times(a))));return H(s,o.precision=e,o.rounding=i,!0)},_.hyperbolicSine=_.sinh=function(){var n,t,e,i,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(t=s.precision,e=s.rounding,s.precision=t+Math.max(r.e,r.sd())+4,s.rounding=1,(i=r.d.length)<3)r=Q(s,2,r,r,!0);else{n=(n=1.4*Math.sqrt(i))>16?16:0|n,r=Q(s,2,r=r.times(1/G(5,n)),r,!0);for(var o,u=new s(5),c=new s(16),f=new s(20);n--;)o=r.times(r),r=r.times(u.plus(o.times(c.times(o).plus(f))))}return s.precision=t,s.rounding=e,H(r,t,e,!0)},_.hyperbolicTangent=_.tanh=function(){var n,t,e=this,i=e.constructor;return e.isFinite()?e.isZero()?new i(e):(n=i.precision,t=i.rounding,i.precision=n+7,i.rounding=1,Z(e.sinh(),e.cosh(),i.precision=n,i.rounding=t)):new i(e.s)},_.inverseCosine=_.acos=function(){var n,t=this,e=t.constructor,i=t.abs().cmp(1),r=e.precision,s=e.rounding;return-1!==i?0===i?t.isNeg()?P(e,r,s):new e(0):new e(NaN):t.isZero()?P(e,r+4,s).times(.5):(e.precision=r+6,e.rounding=1,t=t.asin(),n=P(e,r+4,s).times(.5),e.precision=r,e.rounding=s,n.minus(t))},_.inverseHyperbolicCosine=_.acosh=function(){var n,t,e=this,i=e.constructor;return e.lte(1)?new i(e.eq(1)?0:NaN):e.isFinite()?(n=i.precision,t=i.rounding,i.precision=n+Math.max(Math.abs(e.e),e.sd())+4,i.rounding=1,g=!1,e=e.times(e).minus(1).sqrt().plus(e),g=!0,i.precision=n,i.rounding=t,e.ln()):new i(e)},_.inverseHyperbolicSine=_.asinh=function(){var n,t,e=this,i=e.constructor;return!e.isFinite()||e.isZero()?new i(e):(n=i.precision,t=i.rounding,i.precision=n+2*Math.max(Math.abs(e.e),e.sd())+6,i.rounding=1,g=!1,e=e.times(e).plus(1).sqrt().plus(e),g=!0,i.precision=n,i.rounding=t,e.ln())},_.inverseHyperbolicTangent=_.atanh=function(){var n,t,e,i,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(n=s.precision,t=s.rounding,i=r.sd(),Math.max(i,n)<2*-r.e-1?H(new s(r),n,t,!0):(s.precision=e=i-r.e,r=Z(r.plus(1),new s(1).minus(r),e+n,1),s.precision=n+4,s.rounding=1,r=r.ln(),s.precision=n,s.rounding=t,r.times(.5))):new s(NaN)},_.inverseSine=_.asin=function(){var n,t,e,i,r=this,s=r.constructor;return r.isZero()?new s(r):(t=r.abs().cmp(1),e=s.precision,i=s.rounding,-1!==t?0===t?((n=P(s,e+4,i).times(.5)).s=r.s,n):new s(NaN):(s.precision=e+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=e,s.rounding=i,r.times(2)))},_.inverseTangent=_.atan=function(){var n,t,e,i,r,s,o,u,c,f=this,a=f.constructor,h=a.precision,d=a.rounding;if(f.isFinite()){if(f.isZero())return new a(f);if(f.abs().eq(1)&&h+4<=S)return(o=P(a,h+4,d).times(.25)).s=f.s,o}else{if(!f.s)return new a(NaN);if(h+4<=S)return(o=P(a,h+4,d).times(.5)).s=f.s,o}for(a.precision=u=h+10,a.rounding=1,n=e=Math.min(28,u/7+2|0);n;--n)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(g=!1,t=Math.ceil(u/7),i=1,c=f.times(f),o=new a(f),r=f;-1!==n;)if(r=r.times(c),s=o.minus(r.div(i+=2)),r=r.times(c),void 0!==(o=s.plus(r.div(i+=2))).d[t])for(n=t;o.d[n]===s.d[n]&&n--;);return e&&(o=o.times(2<<e-1)),g=!0,H(o,a.precision=h,a.rounding=d,!0)},_.isFinite=function(){return!!this.d},_.isInteger=_.isInt=function(){return!!this.d&&$(this.e/7)>this.d.length-2},_.isNaN=function(){return!this.s},_.isNegative=_.isNeg=function(){return this.s<0},_.isPositive=_.isPos=function(){return this.s>0},_.isZero=function(){return!!this.d&&0===this.d[0]},_.lessThan=_.lt=function(n){return this.cmp(n)<0},_.lessThanOrEqualTo=_.lte=function(n){return this.cmp(n)<1},_.logarithm=_.log=function(n){var t,e,i,r,s,o,u,c,f=this,a=f.constructor,h=a.precision,d=a.rounding;if(null==n)n=new a(10),t=!0;else{if(e=(n=new a(n)).d,n.s<0||!e||!e[0]||n.eq(1))return new a(NaN);t=n.eq(10)}if(e=f.d,f.s<0||!e||!e[0]||f.eq(1))return new a(e&&!e[0]?-1/0:1!=f.s?NaN:e?0:1/0);if(t)if(e.length>1)s=!0;else{for(r=e[0];r%10===0;)r/=10;s=1!==r}if(g=!1,o=B(f,u=h+5),i=t?U(a,u+10):B(n,u),T((c=Z(o,i,u,1)).d,r=h,d))do{if(o=B(f,u+=10),i=t?U(a,u+10):B(n,u),c=Z(o,i,u,1),!s){+q(c.d).slice(r+1,r+15)+1==1e14&&(c=H(c,h+1,0));break}}while(T(c.d,r+=10,d));return g=!0,H(c,h,d)},_.minus=_.sub=function(n){var t,e,i,r,s,o,u,c,f,a,h,d,l=this,p=l.constructor;if(n=new p(n),!l.d||!n.d)return l.s&&n.s?l.d?n.s=-n.s:n=new p(n.d||l.s!==n.s?l:NaN):n=new p(NaN),n;if(l.s!=n.s)return n.s=-n.s,l.plus(n);if(f=l.d,d=n.d,u=p.precision,c=p.rounding,!f[0]||!d[0]){if(d[0])n.s=-n.s;else{if(!f[0])return new p(3===c?-0:0);n=new p(l)}return g?H(n,u,c):n}if(e=$(n.e/7),a=$(l.e/7),f=f.slice(),s=a-e){for((h=s<0)?(t=f,s=-s,o=d.length):(t=d,e=a,o=f.length),s>(i=Math.max(Math.ceil(u/7),o)+2)&&(s=i,t.length=1),t.reverse(),i=s;i--;)t.push(0);t.reverse()}else{for((h=(i=f.length)<(o=d.length))&&(o=i),i=0;i<o;i++)if(f[i]!=d[i]){h=f[i]<d[i];break}s=0}for(h&&(t=f,f=d,d=t,n.s=-n.s),o=f.length,i=d.length-o;i>0;--i)f[o++]=0;for(i=d.length;i>s;){if(f[--i]<d[i]){for(r=i;r&&0===f[--r];)f[r]=E-1;--f[r],f[i]+=E}f[i]-=d[i]}for(;0===f[--o];)f.pop();for(;0===f[0];f.shift())--e;return f[0]?(n.d=f,n.e=k(f,e),g?H(n,u,c):n):new p(3===c?-0:0)},_.modulo=_.mod=function(n){var t,e=this,i=e.constructor;return n=new i(n),!e.d||!n.s||n.d&&!n.d[0]?new i(NaN):!n.d||e.d&&!e.d[0]?H(new i(e),i.precision,i.rounding):(g=!1,9==i.modulo?(t=Z(e,n.abs(),0,3,1)).s*=n.s:t=Z(e,n,0,i.modulo,1),t=t.times(n),g=!0,e.minus(t))},_.naturalExponential=_.exp=function(){return V(this)},_.naturalLogarithm=_.ln=function(){return B(this)},_.negated=_.neg=function(){var n=new this.constructor(this);return n.s=-n.s,H(n)},_.plus=_.add=function(n){var t,e,i,r,s,o,u,c,f,a,h=this,d=h.constructor;if(n=new d(n),!h.d||!n.d)return h.s&&n.s?h.d||(n=new d(n.d||h.s===n.s?h:NaN)):n=new d(NaN),n;if(h.s!=n.s)return n.s=-n.s,h.minus(n);if(f=h.d,a=n.d,u=d.precision,c=d.rounding,!f[0]||!a[0])return a[0]||(n=new d(h)),g?H(n,u,c):n;if(s=$(h.e/7),i=$(n.e/7),f=f.slice(),r=s-i){for(r<0?(e=f,r=-r,o=a.length):(e=a,i=s,o=f.length),r>(o=(s=Math.ceil(u/7))>o?s+1:o+1)&&(r=o,e.length=1),e.reverse();r--;)e.push(0);e.reverse()}for((o=f.length)-(r=a.length)<0&&(r=o,e=a,a=f,f=e),t=0;r;)t=(f[--r]=f[r]+a[r]+t)/E|0,f[r]%=E;for(t&&(f.unshift(t),++i),o=f.length;0==f[--o];)f.pop();return n.d=f,n.e=k(f,i),g?H(n,u,c):n},_.precision=_.sd=function(n){var t,e=this;if(void 0!==n&&n!==!!n&&1!==n&&0!==n)throw Error(m+n);return e.d?(t=C(e.d),n&&e.e+1>t&&(t=e.e+1)):t=NaN,t},_.round=function(){var n=this,t=n.constructor;return H(new t(n),n.e+1,t.rounding)},_.sine=_.sin=function(){var n,t,e=this,i=e.constructor;return e.isFinite()?e.isZero()?new i(e):(n=i.precision,t=i.rounding,i.precision=n+Math.max(e.e,e.sd())+7,i.rounding=1,e=function(n,t){var e,i=t.d.length;if(i<3)return t.isZero()?t:Q(n,2,t,t);e=(e=1.4*Math.sqrt(i))>16?16:0|e,t=t.times(1/G(5,e)),t=Q(n,2,t,t);for(var r,s=new n(5),o=new n(16),u=new n(20);e--;)r=t.times(t),t=t.times(s.plus(r.times(o.times(r).minus(u))));return t}(i,K(i,e)),i.precision=n,i.rounding=t,H(u>2?e.neg():e,n,t,!0)):new i(NaN)},_.squareRoot=_.sqrt=function(){var n,t,e,i,r,s,o=this,u=o.d,c=o.e,f=o.s,a=o.constructor;if(1!==f||!u||!u[0])return new a(!f||f<0&&(!u||u[0])?NaN:u?o:1/0);for(g=!1,0==(f=Math.sqrt(+o))||f==1/0?(((t=q(u)).length+c)%2==0&&(t+="0"),f=Math.sqrt(t),c=$((c+1)/2)-(c<0||c%2),i=new a(t=f==1/0?"5e"+c:(t=f.toExponential()).slice(0,t.indexOf("e")+1)+c)):i=new a(f.toString()),e=(c=a.precision)+3;;)if(i=(s=i).plus(Z(o,s,e+2,1)).times(.5),q(s.d).slice(0,e)===(t=q(i.d)).slice(0,e)){if("9999"!=(t=t.slice(e-3,e+1))&&(r||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(H(i,c+1,1),n=!i.times(i).eq(o));break}if(!r&&(H(s,c+1,0),s.times(s).eq(o))){i=s;break}e+=4,r=1}return g=!0,H(i,c,a.rounding,n)},_.tangent=_.tan=function(){var n,t,e=this,i=e.constructor;return e.isFinite()?e.isZero()?new i(e):(n=i.precision,t=i.rounding,i.precision=n+10,i.rounding=1,(e=e.sin()).s=1,e=Z(e,new i(1).minus(e.times(e)).sqrt(),n+10,0),i.precision=n,i.rounding=t,H(2==u||4==u?e.neg():e,n,t,!0)):new i(NaN)},_.times=_.mul=function(n){var t,e,i,r,s,o,u,c,f,a=this,h=a.constructor,d=a.d,l=(n=new h(n)).d;if(n.s*=a.s,!d||!d[0]||!l||!l[0])return new h(!n.s||d&&!d[0]&&!l||l&&!l[0]&&!d?NaN:d&&l?0*n.s:n.s/0);for(e=$(a.e/7)+$(n.e/7),(c=d.length)<(f=l.length)&&(s=d,d=l,l=s,o=c,c=f,f=o),s=[],i=o=c+f;i--;)s.push(0);for(i=f;--i>=0;){for(t=0,r=c+i;r>i;)u=s[r]+l[i]*d[r-i-1]+t,s[r--]=u%E|0,t=u/E|0;s[r]=(s[r]+t)%E|0}for(;!s[--o];)s.pop();return t?++e:s.shift(),n.d=s,n.e=k(s,e),g?H(n,h.precision,h.rounding):n},_.toBinary=function(n,t){return X(this,2,n,t)},_.toDecimalPlaces=_.toDP=function(n,t){var e=this,i=e.constructor;return e=new i(e),void 0===n?e:(A(n,0,f),void 0===t?t=i.rounding:A(t,0,8),H(e,n+e.e+1,t))},_.toExponential=function(n,t){var e,i=this,r=i.constructor;return void 0===n?e=L(i,!0):(A(n,0,f),void 0===t?t=r.rounding:A(t,0,8),e=L(i=H(new r(i),n+1,t),!0,n+1)),i.isNeg()&&!i.isZero()?"-"+e:e},_.toFixed=function(n,t){var e,i,r=this,s=r.constructor;return void 0===n?e=L(r):(A(n,0,f),void 0===t?t=s.rounding:A(t,0,8),e=L(i=H(new s(r),n+r.e+1,t),!1,n+i.e+1)),r.isNeg()&&!r.isZero()?"-"+e:e},_.toFraction=function(n){var t,e,i,r,s,o,u,c,f,a,h,d,l=this,p=l.d,w=l.constructor;if(!p)return new w(l);if(f=e=new w(1),i=c=new w(0),o=(s=(t=new w(i)).e=C(p)-l.e-1)%7,t.d[0]=M(10,o<0?7+o:o),null==n)n=s>0?t:f;else{if(!(u=new w(n)).isInt()||u.lt(f))throw Error(m+u);n=u.gt(t)?s>0?t:f:u}for(g=!1,u=new w(q(p)),a=w.precision,w.precision=s=7*p.length*2;h=Z(u,t,0,1,1),1!=(r=e.plus(h.times(i))).cmp(n);)e=i,i=r,r=f,f=c.plus(h.times(r)),c=r,r=t,t=u.minus(h.times(r)),u=r;return r=Z(n.minus(e),i,0,1,1),c=c.plus(r.times(f)),e=e.plus(r.times(i)),c.s=f.s=l.s,d=Z(f,i,s,1).minus(l).abs().cmp(Z(c,e,s,1).minus(l).abs())<1?[f,i]:[c,e],w.precision=a,g=!0,d},_.toHexadecimal=_.toHex=function(n,t){return X(this,16,n,t)},_.toNearest=function(n,t){var e=this,i=e.constructor;if(e=new i(e),null==n){if(!e.d)return e;n=new i(1),t=i.rounding}else{if(n=new i(n),void 0===t?t=i.rounding:A(t,0,8),!e.d)return n.s?e:n;if(!n.d)return n.s&&(n.s=e.s),n}return n.d[0]?(g=!1,e=Z(e,n,0,t,1).times(n),g=!0,H(e)):(n.s=e.s,e=n),e},_.toNumber=function(){return+this},_.toOctal=function(n,t){return X(this,8,n,t)},_.toPower=_.pow=function(n){var t,e,i,r,s,o,u=this,c=u.constructor,f=+(n=new c(n));if(!u.d||!n.d||!u.d[0]||!n.d[0])return new c(M(+u,f));if((u=new c(u)).eq(1))return u;if(i=c.precision,s=c.rounding,n.eq(1))return H(u,i,s);if((t=$(n.e/7))>=n.d.length-1&&(e=f<0?-f:f)<=9007199254740991)return r=R(c,u,e,i),n.s<0?new c(1).div(r):H(r,i,s);if((o=u.s)<0){if(t<n.d.length-1)return new c(NaN);if(0==(1&n.d[t])&&(o=1),0==u.e&&1==u.d[0]&&1==u.d.length)return u.s=o,u}return(t=0!=(e=M(+u,f))&&isFinite(e)?new c(e+"").e:$(f*(Math.log("0."+q(u.d))/Math.LN10+u.e+1)))>c.maxE+1||t<c.minE-1?new c(t>0?o/0:0):(g=!1,c.rounding=u.s=1,e=Math.min(12,(t+"").length),(r=V(n.times(B(u,i+e)),i)).d&&T((r=H(r,i+5,1)).d,i,s)&&(t=i+10,+q((r=H(V(n.times(B(u,t+e)),t),t+5,1)).d).slice(i+1,i+15)+1==1e14&&(r=H(r,i+1,0))),r.s=o,g=!0,c.rounding=s,H(r,i,s))},_.toPrecision=function(n,t){var e,i=this,r=i.constructor;return void 0===n?e=L(i,i.e<=r.toExpNeg||i.e>=r.toExpPos):(A(n,1,f),void 0===t?t=r.rounding:A(t,0,8),e=L(i=H(new r(i),n,t),n<=i.e||i.e<=r.toExpNeg,n)),i.isNeg()&&!i.isZero()?"-"+e:e},_.toSignificantDigits=_.toSD=function(n,t){var e=this.constructor;return void 0===n?(n=e.precision,t=e.rounding):(A(n,1,f),void 0===t?t=e.rounding:A(t,0,8)),H(new e(this),n,t)},_.toString=function(){var n=this,t=n.constructor,e=L(n,n.e<=t.toExpNeg||n.e>=t.toExpPos);return n.isNeg()&&!n.isZero()?"-"+e:e},_.truncated=_.trunc=function(){return H(new this.constructor(this),this.e+1,1)},_.valueOf=_.toJSON=function(){var n=this,t=n.constructor,e=L(n,n.e<=t.toExpNeg||n.e>=t.toExpPos);return n.isNeg()?"-"+e:e};var Z=function(){function n(n,t,e){var i,r=0,s=n.length;for(n=n.slice();s--;)i=n[s]*t+r,n[s]=i%e|0,r=i/e|0;return r&&n.unshift(r),n}function t(n,t,e,i){var r,s;if(e!=i)s=e>i?1:-1;else for(r=s=0;r<e;r++)if(n[r]!=t[r]){s=n[r]>t[r]?1:-1;break}return s}function e(n,t,e,i){for(var r=0;e--;)n[e]-=r,r=n[e]<t[e]?1:0,n[e]=r*i+n[e]-t[e];for(;!n[0]&&n.length>1;)n.shift()}return function(i,r,s,u,c,f){var a,h,d,l,g,p,m,w,v,N,M,y,b,x,D,O,S,_,q,A,T=i.constructor,F=i.s==r.s?1:-1,Z=i.d,L=r.d;if(!Z||!Z[0]||!L||!L[0])return new T(i.s&&r.s&&(Z?!L||Z[0]!=L[0]:L)?Z&&0==Z[0]||!L?0*F:F/0:NaN);for(f?(g=1,h=i.e-r.e):(f=E,g=7,h=$(i.e/g)-$(r.e/g)),q=L.length,S=Z.length,N=(v=new T(F)).d=[],d=0;L[d]==(Z[d]||0);d++);if(L[d]>(Z[d]||0)&&h--,null==s?(x=s=T.precision,u=T.rounding):x=c?s+(i.e-r.e)+1:s,x<0)N.push(1),p=!0;else{if(x=x/g+2|0,d=0,1==q){for(l=0,L=L[0],x++;(d<S||l)&&x--;d++)D=l*f+(Z[d]||0),N[d]=D/L|0,l=D%L|0;p=l||d<S}else{for((l=f/(L[0]+1)|0)>1&&(L=n(L,l,f),Z=n(Z,l,f),q=L.length,S=Z.length),O=q,y=(M=Z.slice(0,q)).length;y<q;)M[y++]=0;(A=L.slice()).unshift(0),_=L[0],L[1]>=f/2&&++_;do{l=0,(a=t(L,M,q,y))<0?(b=M[0],q!=y&&(b=b*f+(M[1]||0)),(l=b/_|0)>1?(l>=f&&(l=f-1),1==(a=t(m=n(L,l,f),M,w=m.length,y=M.length))&&(l--,e(m,q<w?A:L,w,f))):(0==l&&(a=l=1),m=L.slice()),(w=m.length)<y&&m.unshift(0),e(M,m,y,f),-1==a&&(a=t(L,M,q,y=M.length))<1&&(l++,e(M,q<y?A:L,y,f)),y=M.length):0===a&&(l++,M=[0]),N[d++]=l,a&&M[0]?M[y++]=Z[O]||0:(M=[Z[O]],y=1)}while((O++<S||void 0!==M[0])&&x--);p=void 0!==M[0]}N[0]||N.shift()}if(1==g)v.e=h,o=p;else{for(d=1,l=N[0];l>=10;l/=10)d++;v.e=d+h*g-1,H(v,c?s+v.e+1:s,u,p)}return v}}();function H(n,t,e,i){var r,s,o,u,c,f,a,h,d,l=n.constructor;n:if(null!=t){if(!(h=n.d))return n;for(r=1,u=h[0];u>=10;u/=10)r++;if((s=t-r)<0)s+=7,o=t,c=(a=h[d=0])/M(10,r-o-1)%10|0;else if((d=Math.ceil((s+1)/7))>=(u=h.length)){if(!i)break n;for(;u++<=d;)h.push(0);a=c=0,r=1,o=(s%=7)-7+1}else{for(a=u=h[d],r=1;u>=10;u/=10)r++;c=(o=(s%=7)-7+r)<0?0:a/M(10,r-o-1)%10|0}if(i=i||t<0||void 0!==h[d+1]||(o<0?a:a%M(10,r-o-1)),f=e<4?(c||i)&&(0==e||e==(n.s<0?3:2)):c>5||5==c&&(4==e||i||6==e&&(s>0?o>0?a/M(10,r-o):0:h[d-1])%10&1||e==(n.s<0?8:7)),t<1||!h[0])return h.length=0,f?(t-=n.e+1,h[0]=M(10,(7-t%7)%7),n.e=-t||0):h[0]=n.e=0,n;if(0==s?(h.length=d,u=1,d--):(h.length=d+1,u=M(10,7-s),h[d]=o>0?(a/M(10,r-o)%M(10,o)|0)*u:0),f)for(;;){if(0==d){for(s=1,o=h[0];o>=10;o/=10)s++;for(o=h[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(n.e++,h[0]==E&&(h[0]=1));break}if(h[d]+=u,h[d]!=E)break;h[d--]=0,u=1}for(s=h.length;0===h[--s];)h.pop()}return g&&(n.e>l.maxE?(n.d=null,n.e=NaN):n.e<l.minE&&(n.e=0,n.d=[0])),n}function L(n,t,e){if(!n.isFinite())return J(n);var i,r=n.e,s=q(n.d),o=s.length;return t?(e&&(i=e-o)>0?s=s.charAt(0)+"."+s.slice(1)+I(i):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):r<0?(s="0."+I(-r-1)+s,e&&(i=e-o)>0&&(s+=I(i))):r>=o?(s+=I(r+1-o),e&&(i=e-r-1)>0&&(s=s+"."+I(i))):((i=r+1)<o&&(s=s.slice(0,i)+"."+s.slice(i)),e&&(i=e-o)>0&&(r+1===o&&(s+="."),s+=I(i))),s}function k(n,t){var e=n[0];for(t*=7;e>=10;e/=10)t++;return t}function U(n,t,e){if(t>O)throw g=!0,e&&(n.precision=e),Error(w);return H(new n(h),t,1,!0)}function P(n,t,e){if(t>S)throw Error(w);return H(new n(d),t,e,!0)}function C(n){var t=n.length-1,e=7*t+1;if(t=n[t]){for(;t%10==0;t/=10)e--;for(t=n[0];t>=10;t/=10)e++}return e}function I(n){for(var t="";n--;)t+="0";return t}function R(n,t,e,i){var r,s=new n(1),o=Math.ceil(i/7+4);for(g=!1;;){if(e%2&&nn((s=s.times(t)).d,o)&&(r=!0),0===(e=$(e/2))){e=s.d.length-1,r&&0===s.d[e]&&++s.d[e];break}nn((t=t.times(t)).d,o)}return g=!0,s}function Y(n){return 1&n.d[n.d.length-1]}function W(n,t,e){for(var i,r=new n(t[0]),s=0;++s<t.length;){if(!(i=new n(t[s])).s){r=i;break}r[e](i)&&(r=i)}return r}function V(n,t){var e,i,r,s,o,u,c,f=0,a=0,h=0,d=n.constructor,l=d.rounding,p=d.precision;if(!n.d||!n.d[0]||n.e>17)return new d(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(null==t?(g=!1,c=p):c=t,u=new d(.03125);n.e>-2;)n=n.times(u),h+=5;for(c+=i=Math.log(M(2,h))/Math.LN10*2+5|0,e=s=o=new d(1),d.precision=c;;){if(s=H(s.times(n),c,1),e=e.times(++a),q((u=o.plus(Z(s,e,c,1))).d).slice(0,c)===q(o.d).slice(0,c)){for(r=h;r--;)o=H(o.times(o),c,1);if(null!=t)return d.precision=p,o;if(!(f<3&&T(o.d,c-i,l,f)))return H(o,d.precision=p,l,g=!0);d.precision=c+=10,e=s=u=new d(1),a=0,f++}o=u}}function B(n,t){var e,i,r,s,o,u,c,f,a,h,d,l=1,p=n,m=p.d,w=p.constructor,v=w.rounding,N=w.precision;if(p.s<0||!m||!m[0]||!p.e&&1==m[0]&&1==m.length)return new w(m&&!m[0]?-1/0:1!=p.s?NaN:m?0:p);if(null==t?(g=!1,a=N):a=t,w.precision=a+=10,i=(e=q(m)).charAt(0),!(Math.abs(s=p.e)<15e14))return f=U(w,a+2,N).times(s+""),p=B(new w(i+"."+e.slice(1)),a-10).plus(f),w.precision=N,null==t?H(p,N,v,g=!0):p;for(;i<7&&1!=i||1==i&&e.charAt(1)>3;)i=(e=q((p=p.times(n)).d)).charAt(0),l++;for(s=p.e,i>1?(p=new w("0."+e),s++):p=new w(i+"."+e.slice(1)),h=p,c=o=p=Z(p.minus(1),p.plus(1),a,1),d=H(p.times(p),a,1),r=3;;){if(o=H(o.times(d),a,1),q((f=c.plus(Z(o,new w(r),a,1))).d).slice(0,a)===q(c.d).slice(0,a)){if(c=c.times(2),0!==s&&(c=c.plus(U(w,a+2,N).times(s+""))),c=Z(c,new w(l),a,1),null!=t)return w.precision=N,c;if(!T(c.d,a-10,v,u))return H(c,w.precision=N,v,g=!0);w.precision=a+=10,f=o=p=Z(h.minus(1),h.plus(1),a,1),d=H(p.times(p),a,1),r=u=1}c=f,r+=2}}function J(n){return String(n.s*n.s/0)}function j(n,t){var e,i,r;for((e=t.indexOf("."))>-1&&(t=t.replace(".","")),(i=t.search(/e/i))>0?(e<0&&(e=i),e+=+t.slice(i+1),t=t.substring(0,i)):e<0&&(e=t.length),i=0;48===t.charCodeAt(i);i++);for(r=t.length;48===t.charCodeAt(r-1);--r);if(t=t.slice(i,r)){if(r-=i,n.e=e=e-i-1,n.d=[],i=(e+1)%7,e<0&&(i+=7),i<r){for(i&&n.d.push(+t.slice(0,i)),r-=7;i<r;)n.d.push(+t.slice(i,i+=7));i=7-(t=t.slice(i)).length}else i-=r;for(;i--;)t+="0";n.d.push(+t),g&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function z(n,t){var e,i,r,o,u,c,f,a,h;if(t.indexOf("_")>-1){if(t=t.replace(/(\d)_(?=\d)/g,"$1"),D.test(t))return j(n,t)}else if("Infinity"===t||"NaN"===t)return+t||(n.s=NaN),n.e=NaN,n.d=null,n;if(b.test(t))e=16,t=t.toLowerCase();else if(y.test(t))e=2;else{if(!x.test(t))throw Error(m+t);e=8}for((o=t.search(/p/i))>0?(f=+t.slice(o+1),t=t.substring(2,o)):t=t.slice(2),u=(o=t.indexOf("."))>=0,i=n.constructor,u&&(o=(c=(t=t.replace(".","")).length)-o,r=R(i,new i(e),o,2*o)),o=h=(a=F(t,e,E)).length-1;0===a[o];--o)a.pop();return o<0?new i(0*n.s):(n.e=k(a,h),n.d=a,g=!1,u&&(n=Z(n,r,4*c)),f&&(n=n.times(Math.abs(f)<54?M(2,f):s.pow(2,f))),g=!0,n)}function Q(n,t,e,i,r){var s,o,u,c,f=n.precision,a=Math.ceil(f/7);for(g=!1,c=e.times(e),u=new n(i);;){if(o=Z(u.times(c),new n(t++*t++),f,1),u=r?i.plus(o):i.minus(o),i=Z(o.times(c),new n(t++*t++),f,1),void 0!==(o=u.plus(i)).d[a]){for(s=a;o.d[s]===u.d[s]&&s--;);if(-1==s)break}s=u,u=i,i=o,o=s}return g=!0,o.d.length=a+1,o}function G(n,t){for(var e=n;--t;)e*=n;return e}function K(n,t){var e,i=t.s<0,r=P(n,n.precision,1),s=r.times(.5);if((t=t.abs()).lte(s))return u=i?4:1,t;if((e=t.divToInt(r)).isZero())u=i?3:2;else{if((t=t.minus(e.times(r))).lte(s))return u=Y(e)?i?2:3:i?4:1,t;u=Y(e)?i?1:4:i?3:2}return t.minus(r).abs()}function X(n,t,e,i){var r,s,u,c,h,d,l,g,p,m=n.constructor,w=void 0!==e;if(w?(A(e,1,f),void 0===i?i=m.rounding:A(i,0,8)):(e=m.precision,i=m.rounding),n.isFinite()){for(w?(r=2,16==t?e=4*e-3:8==t&&(e=3*e-2)):r=t,(u=(l=L(n)).indexOf("."))>=0&&(l=l.replace(".",""),(p=new m(1)).e=l.length-u,p.d=F(L(p),10,r),p.e=p.d.length),s=h=(g=F(l,10,r)).length;0==g[--h];)g.pop();if(g[0]){if(u<0?s--:((n=new m(n)).d=g,n.e=s,g=(n=Z(n,p,e,i,0,r)).d,s=n.e,d=o),u=g[e],c=r/2,d=d||void 0!==g[e+1],d=i<4?(void 0!==u||d)&&(0===i||i===(n.s<0?3:2)):u>c||u===c&&(4===i||d||6===i&&1&g[e-1]||i===(n.s<0?8:7)),g.length=e,d)for(;++g[--e]>r-1;)g[e]=0,e||(++s,g.unshift(1));for(h=g.length;!g[h-1];--h);for(u=0,l="";u<h;u++)l+=a.charAt(g[u]);if(w){if(h>1)if(16==t||8==t){for(u=16==t?4:3,--h;h%u;h++)l+="0";for(h=(g=F(l,r,t)).length;!g[h-1];--h);for(u=1,l="1.";u<h;u++)l+=a.charAt(g[u])}else l=l.charAt(0)+"."+l.slice(1);l=l+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)l="0"+l;l="0."+l}else if(++s>h)for(s-=h;s--;)l+="0";else s<h&&(l=l.slice(0,s)+"."+l.slice(s))}else l=w?"0p+0":"0";l=(16==t?"0x":2==t?"0b":8==t?"0o":"")+l}else l=J(n);return n.s<0?"-"+l:l}function nn(n,t){if(n.length>t)return n.length=t,!0}function tn(n){return new this(n).abs()}function en(n){return new this(n).acos()}function rn(n){return new this(n).acosh()}function sn(n,t){return new this(n).plus(t)}function on(n){return new this(n).asin()}function un(n){return new this(n).asinh()}function cn(n){return new this(n).atan()}function fn(n){return new this(n).atanh()}function an(n,t){n=new this(n),t=new this(t);var e,i=this.precision,r=this.rounding,s=i+4;return n.s&&t.s?n.d||t.d?!t.d||n.isZero()?(e=t.s<0?P(this,i,r):new this(0)).s=n.s:!n.d||t.isZero()?(e=P(this,s,1).times(.5)).s=n.s:t.s<0?(this.precision=s,this.rounding=1,e=this.atan(Z(n,t,s,1)),t=P(this,s,1),this.precision=i,this.rounding=r,e=n.s<0?e.minus(t):e.plus(t)):e=this.atan(Z(n,t,s,1)):(e=P(this,s,1).times(t.s>0?.25:.75)).s=n.s:e=new this(NaN),e}function hn(n){return new this(n).cbrt()}function dn(n){return H(n=new this(n),n.e+1,2)}function ln(n,t,e){return new this(n).clamp(t,e)}function gn(n){if(!n||"object"!==typeof n)throw Error(p+"Object expected");var t,e,i,r=!0===n.defaults,s=["precision",1,f,"rounding",0,8,"toExpNeg",-c,0,"toExpPos",0,c,"maxE",0,c,"minE",-c,0,"modulo",0,9];for(t=0;t<s.length;t+=3)if(e=s[t],r&&(this[e]=l[e]),void 0!==(i=n[e])){if(!($(i)===i&&i>=s[t+1]&&i<=s[t+2]))throw Error(m+e+": "+i);this[e]=i}if(e="crypto",r&&(this[e]=l[e]),void 0!==(i=n[e])){if(!0!==i&&!1!==i&&0!==i&&1!==i)throw Error(m+e+": "+i);if(i){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error(v);this[e]=!0}else this[e]=!1}return this}function pn(n){return new this(n).cos()}function mn(n){return new this(n).cosh()}function wn(n,t){return new this(n).div(t)}function vn(n){return new this(n).exp()}function Nn(n){return H(n=new this(n),n.e+1,3)}function $n(){var n,t,e=new this(0);for(g=!1,n=0;n<arguments.length;)if((t=new this(arguments[n++])).d)e.d&&(e=e.plus(t.times(t)));else{if(t.s)return g=!0,new this(1/0);e=t}return g=!0,e.sqrt()}function Mn(n){return n instanceof s||n&&n.toStringTag===N||!1}function yn(n){return new this(n).ln()}function bn(n,t){return new this(n).log(t)}function xn(n){return new this(n).log(2)}function Dn(n){return new this(n).log(10)}function En(){return W(this,arguments,"lt")}function On(){return W(this,arguments,"gt")}function Sn(n,t){return new this(n).mod(t)}function _n(n,t){return new this(n).mul(t)}function qn(n,t){return new this(n).pow(t)}function An(n){var t,e,i,r,s=0,o=new this(1),u=[];if(void 0===n?n=this.precision:A(n,1,f),i=Math.ceil(n/7),this.crypto)if(crypto.getRandomValues)for(t=crypto.getRandomValues(new Uint32Array(i));s<i;)(r=t[s])>=429e7?t[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=r%1e7;else{if(!crypto.randomBytes)throw Error(v);for(t=crypto.randomBytes(i*=4);s<i;)(r=t[s]+(t[s+1]<<8)+(t[s+2]<<16)+((127&t[s+3])<<24))>=214e7?crypto.randomBytes(4).copy(t,s):(u.push(r%1e7),s+=4);s=i/4}else for(;s<i;)u[s++]=1e7*Math.random()|0;for(n%=7,(i=u[--s])&&n&&(r=M(10,7-n),u[s]=(i/r|0)*r);0===u[s];s--)u.pop();if(s<0)e=0,u=[0];else{for(e=-1;0===u[0];e-=7)u.shift();for(i=1,r=u[0];r>=10;r/=10)i++;i<7&&(e-=7-i)}return o.e=e,o.d=u,o}function Tn(n){return H(n=new this(n),n.e+1,this.rounding)}function Fn(n){return(n=new this(n)).d?n.d[0]?n.s:0*n.s:n.s||NaN}function Zn(n){return new this(n).sin()}function Hn(n){return new this(n).sinh()}function Ln(n){return new this(n).sqrt()}function kn(n,t){return new this(n).sub(t)}function Un(){var n=0,t=arguments,e=new this(t[n]);for(g=!1;e.s&&++n<t.length;)e=e.plus(t[n]);return g=!0,H(e,this.precision,this.rounding)}function Pn(n){return new this(n).tan()}function Cn(n){return new this(n).tanh()}function In(n){return H(n=new this(n),n.e+1,1)}(s=function n(t){var e,i,r;function s(n){var t,e,i,r=this;if(!(r instanceof s))return new s(n);if(r.constructor=s,Mn(n))return r.s=n.s,void(g?!n.d||n.e>s.maxE?(r.e=NaN,r.d=null):n.e<s.minE?(r.e=0,r.d=[0]):(r.e=n.e,r.d=n.d.slice()):(r.e=n.e,r.d=n.d?n.d.slice():n.d));if("number"===(i=typeof n)){if(0===n)return r.s=1/n<0?-1:1,r.e=0,void(r.d=[0]);if(n<0?(n=-n,r.s=-1):r.s=1,n===~~n&&n<1e7){for(t=0,e=n;e>=10;e/=10)t++;return void(g?t>s.maxE?(r.e=NaN,r.d=null):t<s.minE?(r.e=0,r.d=[0]):(r.e=t,r.d=[n]):(r.e=t,r.d=[n]))}return 0*n!==0?(n||(r.s=NaN),r.e=NaN,void(r.d=null)):j(r,n.toString())}if("string"!==i)throw Error(m+n);return 45===(e=n.charCodeAt(0))?(n=n.slice(1),r.s=-1):(43===e&&(n=n.slice(1)),r.s=1),D.test(n)?j(r,n):z(r,n)}if(s.prototype=_,s.ROUND_UP=0,s.ROUND_DOWN=1,s.ROUND_CEIL=2,s.ROUND_FLOOR=3,s.ROUND_HALF_UP=4,s.ROUND_HALF_DOWN=5,s.ROUND_HALF_EVEN=6,s.ROUND_HALF_CEIL=7,s.ROUND_HALF_FLOOR=8,s.EUCLID=9,s.config=s.set=gn,s.clone=n,s.isDecimal=Mn,s.abs=tn,s.acos=en,s.acosh=rn,s.add=sn,s.asin=on,s.asinh=un,s.atan=cn,s.atanh=fn,s.atan2=an,s.cbrt=hn,s.ceil=dn,s.clamp=ln,s.cos=pn,s.cosh=mn,s.div=wn,s.exp=vn,s.floor=Nn,s.hypot=$n,s.ln=yn,s.log=bn,s.log10=Dn,s.log2=xn,s.max=En,s.min=On,s.mod=Sn,s.mul=_n,s.pow=qn,s.random=An,s.round=Tn,s.sign=Fn,s.sin=Zn,s.sinh=Hn,s.sqrt=Ln,s.sub=kn,s.sum=Un,s.tan=Pn,s.tanh=Cn,s.trunc=In,void 0===t&&(t={}),t&&!0!==t.defaults)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<r.length;)t.hasOwnProperty(i=r[e++])||(t[i]=this[i]);return s.config(t),s}(l)).prototype.constructor=s,s.default=s.Decimal=s,h=new s(h),d=new s(d),void 0===(i=function(){return s}.call(t,e,t,n))||(n.exports=i)}()}}]);