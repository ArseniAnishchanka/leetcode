class Solution
{
public:
    string minRemoveToMakeValid(string s)
    {
        stack<int> st;
        
        for (int i = 0; i < s.size(); ++i)
        {
            if (s[i] == '(')
            {
                st.push(i);
            }
            else if (s[i] == ')')
            {
                if (st.empty())
                {
                    s[i] = '-';
                }
                else
                {
                    st.pop();
                }
            }
        }
        
        while (not st.empty())
        {
            s[st.top()] = '-';
            st.pop();
        }
        
        string ans = "";
        
        for (char c : s)
        {
            if (c != '-')
            {
                ans += c;
            }
        }
        
        return ans;
    }
};