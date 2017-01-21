url=https://api.github.com/orgs/archlinuxjp/public_members
if which jq  > /dev/null 2>&1;then
	curl -sL $url | jq -r '.[].login'
else
	curl -sL $url
fi
