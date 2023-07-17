import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const adminsApi = createApi({
    reducerPath: 'adminsApi',//unique key wee will access the data by this name it will store all data as cache
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://loclhost:3001/',
    }),
    tagTypes: ["Student","Teacher"],
    //endpoint are hit point
    endpoints: (builder)=> ({
        getStudents: builder.query({
            query: ()=> 'students',
            providesTags: ["Student"],
        }),
        getStudentsById: builder.query({
            query: (id)=> `students/${id}`,
            //template litteral
        }),
        addStudent: builder.mutation({
            query: (student) => ({
                url: 'students',
                method: "POST",
                body: student,
            }),
            invalidatesTags: ["Student"],
        }),
        updateStudent: builder.mutation({
            query: ({id, ...student}) => ({
                url: `students/${id}`,
                method: "PUT",
                body: student,
            }),
            invalidatesTags: ["Student"],
        })
    }),
})


export const {useGetStudentsQuery, useGetStudentsByIdQuery, useAddStudentMutation, useUpdateStudentMutation} = adminsApi;

//fetchBaseQuery - similar to axios
//once i fetch the data the it stored as cache after that i you want same data then you can use it bcoz it's in inside a reducer

/*

const {data} = useGetStudentsQuery(undefined, {
    selecteFromResult: ({data}) => ({
        data: data?.find(el => el.id == match.params.id)
    })
});

{
    data ==undefined ? (
        spinner
    ):<component/>
}
----it's a pro type of query that we don't want to make a request for same data ----
 -- will use in table --
*/


//mutations -- are somethin update opertaion performing on server
/**
 import the mutation

 cl(useAddStudentMutation()) will return array 1st one for mutation second on shws info
 will destructure
 const [addStudent, {isLoading}] = useAddStudentMutation()
isError, isSuccess

 tags -->
 invalidatesTags
 provideTags
 */