#!/bin/bash

rep=archlinuxjp.github.io-comment
reps=archlinuxjp/archlinuxjp.github.io-comment
post=${rep}/_posts
posts=themes/hugo-theme-arch/static/content/post
if [ ! -d ../$rep ];then
	git clone https://github.com/${reps}.git ../${rep}
fi
if [ -d ../${posts} ];then
	mkdir -p ../${post}
	f=$(echo -e "`ls -A ../${posts}`\n`ls -A ../${post}`" | sort | uniq -u)
	cd ../${post}
	if [ -n "$f" ];then
		n=`echo "$f" | wc -l`
		echo $n
		for (( i=1;i<=$n;i++ ))
		do
			t=`echo "$f" | awk "NR==$i"`
			echo $t
			touch $t
			git add $t
			git commit -m "update"
		done
	fi
fi
